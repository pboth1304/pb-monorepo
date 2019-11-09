import * as express from 'express';
import * as cors from 'cors';
import { environment } from './environments/environment';
import hotelRouter from './app/hotels/hotels.routes';

export const app = express();

/**
 * Set CORS with the following options.
 */
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token'
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin:
    process.env.NODE_ENV === 'development'
      ? ['localhost:8080', 'localhost:4200']
      : false,
  preflightContinue: false
};

app.use(cors(options));

/**
 * Setting max. payload to 10kb.
 */
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/**
 * Setting app routes.
 */
app.use(`${environment.basePath}/hotels`, hotelRouter);
