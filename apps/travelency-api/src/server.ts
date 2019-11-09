import { app } from './app';

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
 * Initialize the server.
 */
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/v1`);
});

server.on('error', console.error);

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

process.on('SIGTERM', () => {
  console.log('SIGTERM RECIEVED. Shutting down gracefully!');
  server.close(() => {
    console.log('Process terminated!');
  });
});
