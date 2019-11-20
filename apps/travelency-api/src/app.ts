import * as express from 'express';
import * as cors from 'cors';
import { environment } from './environments/environment';
import { Application } from 'express';
import { corsOptions } from './app/configs/cors.config';
import { Server } from 'http';
import * as passport from 'passport';

class App {
  private readonly app: Application;
  private readonly port: string | number;

  constructor(controllers: any[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initMiddleware();
    this.initControllers(controllers);
  }

  /**
   * Getter / Setter
   */
  public getApp(): Application {
    return this.app;
  }

  /**
   * Initialize all Middleware functions.
   */
  private initMiddleware(): void {
    // Enable CORS
    this.app.use(cors(corsOptions));

    /**
     * Setting max. payload to 10kb.
     */
    this.app.use(express.json({ limit: '10kb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10kb' }));

    /**
     * Init passport.js
     */
    this.app.use(passport.initialize());
  }

  /**
   * Initialize all given Controllers.
   * @param controllers
   */
  private initControllers(controllers: any[]): void {
    // TODO add interface for controller type
    controllers.forEach(controller => {
      this.app.use(
        `${environment.basePath}${controller.path}`,
        controller.router
      );
    });
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

export default App;
