import * as express from 'express';
import * as cors from 'cors';
import { environment } from './environments/environment';
import HotelRouter from './app/routes/hotels.routes';
import HotelsController from './app/controllers/hotel.controller';

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

const hotelsController: HotelsController = new HotelsController();

/**
 * Setting app routes.
 */
console.log('`${environment.basePath}/${hotelsController.path}`', `${environment.basePath}${hotelsController.path}`)
app.use(`${environment.basePath}/hotels`, hotelsController.router);
