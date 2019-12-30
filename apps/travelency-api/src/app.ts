import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import { environment } from './environments/environment';
import { corsOptions } from './app/configs/cors.config';
import { Server } from 'http';
import { Route } from '@pb-monorepo/travelency/models';
import * as morgan from 'morgan';
import { connect, connection } from 'mongoose';
import { globalErrorHandlingMiddleware } from './app/utils/error-handling.utils';

class TravelencyApp {
  private readonly app: Application;
  private readonly port: string | number;

  constructor(routes: Route[], port: number | string, mongoURI: string) {
    this.app = express();
    this.port = port;

    this.initMiddleware();
    this.initRoutes(routes);
    /** Has to be initialized after initRoutes() */
    this.initErrorHandlingMiddleware();
    this.initMongoDB(mongoURI);
  }

  public getApp(): Application {
    return this.app;
  }

  /**
   * Initialize all Middleware functions.
   */
  private initMiddleware(): void {
    /** Enable CORS */
    this.app.use(cors(corsOptions));

    /** Setting max. payload to 10kb. */
    this.app.use(express.json({ limit: '10kb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10kb' }));

    /** Enable Logging in Development Mode */
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
  }

  /**
   * Initializes central Error Handling.
   */
  private initErrorHandlingMiddleware(): void {
    this.app.use(globalErrorHandlingMiddleware);
  }

  /**
   * Initialize all given Controllers.
   * @param controllers
   */
  private initRoutes(routes: Route[]): void {
    // TODO add interface for routes class type
    routes.forEach(route => {
      this.app.use(
        `${environment.basePath}${route.getRoutePath()}`,
        route.getRouter()
      );
    });
  }

  /**
   * Initialize the Mongo DB.
   */
  private initMongoDB(mongoURI: string): void {
    const dbConnection = connection;
    const baseConfig = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    };

    dbConnection.on('connected', () => {
      console.log('Mongo DB Connection Established');
    });
    dbConnection.on('reconnected', () => {
      console.log('Mongo DB Connection Reestablished');
    });
    dbConnection.on('disconnected', () => {
      console.log('Mongo DB Connection Disconnected');
      console.log('Trying to reconnect to Mongo DB ...');
      setTimeout(() => {
        connect(
          mongoURI,
          {
            autoReconnect: true,
            keepAlive: true,
            socketTimeoutMS: 3000,
            connectTimeoutMS: 3000,
            ...baseConfig
          }
        );
      }, 3000);
    });
    dbConnection.on('close', () => {
      console.log('Mongo DB Connection Closed');
    });
    dbConnection.on('error', (error: Error) => {
      console.log(`Mongo DB Connection ERROR: ${error}`);
    });

    /** Connect to Database. */
    const connectToDB = async () => {
      await connect(
        mongoURI,
        {
          autoReconnect: true,
          keepAlive: true,
          ...baseConfig
        }
      );
    };

    connectToDB().catch(error => console.error(error));
  }

  /**
   * Initialize the Server to listen on the given port.
   */
  public listen(): Server {
    return this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default TravelencyApp;
