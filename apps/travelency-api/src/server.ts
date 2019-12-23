import App from './app';
import * as mongoose from 'mongoose';
import RoomsController from './app/controllers/rooms.controller';
import UsersController from './app/controllers/users.controller';
import AuthController from './app/controllers/auth.controller';
import HotelRoutes from './app/routes/hotel.routes';
import RoomRoutes from './app/routes/room.routes';

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
    new HotelRoutes(),
    new RoomRoutes(),
    // new UsersController(),
    // new AuthController()
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
