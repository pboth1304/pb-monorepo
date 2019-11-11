import App from './app';
import * as mongoose from 'mongoose';
import HotelsController from './app/controllers/hotels.controller';

/**
 * If an `uncaughtException` appears shut down the server.
 */
process.on('uncaughtException', err => {
  console.log('Uncaught Exception! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

/**
 * Get the `dotenv` config file.
 */
// dotenv.config({ path: './config.env' });

/**
 * Initialize DB connection.
 */
mongoose
  .connect(
    `mongodb+srv://admin:peMWXy1HHUnzZcr0a@travelency-cluster-9wswh.mongodb.net/travelency?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log('DB Connection successful!'));

/**
 * Initialize the app.
 */
const port = process.env.port || 3333;

const app = new App(
  [
    new HotelsController()
  ],
  port
);

const server = app.listen();


/**
 * If an `unhandledRejection` appears close the server with exit code 1.
 */
process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

/**
 * If `SIGTERM` recieved then close the server gracefully.
 */
process.on('SIGTERM', () => {
  console.log('SIGTERM RECIEVED. Shutting down gracefully!');
  server.close(() => {
    console.log('Process terminated!');
  });
});
