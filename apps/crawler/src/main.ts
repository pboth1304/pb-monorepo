import { Crawler } from './app/classes/crawler';
import DbConnection from './app/classes/dbConnection';
import { environment } from './environments/environment';

const connectionStr = environment.DB_CONNECTION.replace(
  '<PASSWORD>',
  environment.DB_PASSWORD
);

const db = new DbConnection(connectionStr);

const dbStatus = db.getConnectionStatus();

process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

console.log('DB Connection Status: ', dbStatus);

console.log('Start Crawling...');
const crawler = new Crawler('https://www.spiegel.de', 'https://www.ww-ag.com');
