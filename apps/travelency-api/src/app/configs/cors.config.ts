import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
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
