import TravelencyApp from './app';
import HotelRoutes from './app/routes/hotel.routes';
import RoomRoutes from './app/routes/room.routes';
import UserRoutes from './app/routes/user.routes';
import AuthRoutes from './app/routes/auth.routes';

/**
 * If an `uncaughtException` appears shut down the server.
 */
process.on('uncaughtException', err => {
  console.log('Uncaught Exception! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

/**
 * Initialize the app.
 */
const port = process.env.port || 3333;
const mongoURI =
  'mongodb+srv://admin:peMWXy1HHUnzZcr0a@travelency-cluster-9wswh.mongodb.net/travelency?retryWrites=true&w=majority';

const app = new TravelencyApp(
  [new HotelRoutes(), new RoomRoutes(), new UserRoutes(), new AuthRoutes()],
  port,
  mongoURI
);

const server = app.listen();

/**
 * If an `unhandledRejection` appears close the server with exit code 1.
 */
process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log('Error', err);
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
