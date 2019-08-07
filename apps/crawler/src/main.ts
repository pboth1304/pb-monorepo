import { Crawler } from './app/core/crawler';

console.log('Start Crawling...');
const crawler = new Crawler('https://www.spiegel.de', 'https://www.ww-ag.com');

process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
