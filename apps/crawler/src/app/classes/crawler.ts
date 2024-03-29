import nodeFetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { IWebsite } from '@pb-monorepo/shared/models';
import Website from '../schemas/website.schema';
import DocumentParser from './documentParser';

/**
 * 1) pass in urls to crawl (constructor?)
 * 2) check if meta tag robots is noindex
 * 3) check on database if page is already there
 * 4) if not, fetch page of each given url
 * 5) parse html of response
 * 6) get meta tags if provided (page description, categories, etc)
 * 7) get links of page
 * 8) write page to db
 */
export class Crawler {
  private urls: string[];
  private DocumentParser: DocumentParser;

  constructor(...urls: string[]) {
    this.DocumentParser = new DocumentParser();
    this.urls = urls;
  }

  // public async crawlSites(): Promise<IWebsite[]> {
  public async crawlSites() {
    // 1) iterate through given urls
    const websiteObjs = await this.urls.map(async url => {
      // 2) get website
      const res = await nodeFetch(url);

      // 3) parse website to html
      const html = await res.text();

      const $ = cheerio.load(html);

      const robotsMetatag = this.DocumentParser.getNoRobotsMetatag($);

      // if robots meta tag is noindex, skip website
      if (robotsMetatag && robotsMetatag.includes('noindex')) {
        return;
      }

      // 4) get website properties
      const title = this.DocumentParser.getTitle($);

      const description = this.DocumentParser.getDescription($);

      const keywords = this.DocumentParser.getKeywords($);

      let keywordsArr: string[] = [];

      if (keywords) {
        keywordsArr = [...keywordsArr, ...keywords.split(', ')];
      }

      const links = this.DocumentParser.getLinks($);

      // 5) return website obj
      const websiteObj: IWebsite = {
        title,
        url,
        description,
        keywords: keywordsArr,
        links
      };

      return websiteObj;
    });

    // 6) return all website objects
    this.writeToDb(await Promise.all(websiteObjs));
  }

  private async writeToDb(sites: IWebsite[]) {
    sites.forEach(async site => {
      try {
        await Website.create(site);
      } catch (err) {
        console.log('Skip: Document already exists');
        return;
      }
    });
  }
}
