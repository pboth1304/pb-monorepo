import * as express from 'express';
import * as cors from 'cors';
import { environment } from './environments/environment';
import { Application } from 'express';
import { corsOptions } from './app/configs/cors.config';
import { Server } from 'http';

class App {
  private readonly app: Application;
  private readonly port: string | number;

  constructor(routes: any[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initMiddleware();
    this.initRoutes(routes);
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
  }

  /**
   * Initialize all given Controllers.
   * @param controllers
   */
  private initRoutes(routes: any[]): void {
    // TODO add interface for routes class type
    routes.forEach(route => {
      this.app.use(`${environment.basePath}${route.path}`, route.router);
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
