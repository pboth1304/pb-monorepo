import { Crawler } from './app/core/crawler';

console.log('Start Crawling...');
const crawler = new Crawler('https://www.spiegel.de', 'https://www.google.de');
