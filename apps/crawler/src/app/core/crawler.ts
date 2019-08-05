import nodeFetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { Website } from '../models/website.model';

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

  constructor(...urls: string[]) {
    this.urls = urls;
    this.fetchWebsitesByUrl();
  }

  private async fetchWebsitesByUrl(): Promise<Website[]> {
    // 1) iterate through given urls
    const websiteObjs = await this.urls.map(async url => {
      // 2) get website
      const res = await nodeFetch(url);

      // 3) parse website to html
      const html = await res.text();

      const $ = cheerio.load(html);

      // 4) get website properties
      const title = this.getTitle($);

      const description = this.getDescription($);

      const keywords = this.getKeywords($);

      let keywordsArr: string[] = [];

      if (keywords) {
        keywordsArr = [...keywordsArr, ...keywords.split(', ')];
      }

      const links = this.getLinks($);

      // 5) return website obj
      const websiteObj: Website = {
        title,
        description,
        keywords: keywordsArr,
        links
      };

      return websiteObj;
    });

    // 6) return all website objects
    return Promise.all(websiteObjs);
  }

  /**
   * Returns title of the given page.
   * @param $
   */
  private getTitle($: CheerioStatic): string {
    return $(`title`).text();
  }

  /**
   * Returns description of given page.
   * @param $
   */
  private getDescription($: CheerioStatic): string {
    return $(`meta[name=description]`).attr('content');
  }

  /**
   * Returns keywords of given page.
   * @param $
   */
  private getKeywords($: CheerioStatic): string {
    return $(`meta[name=keywords]`).attr('content');
  }

  /**
   * Returns every link of the page.
   * But only if it has a href attribute and is no relative link.
   * @param $
   */
  private getLinks($: CheerioStatic) {
    const links = $('a');
    const linkArr: string[] = [];

    $(links).each((i, el) => {
      const processedLink = this.processLinks($(el).attr('href'));
      linkArr.push(processedLink);
    });

    const filteredLinks = linkArr.filter(link => {
      if (link) {
        return link;
      }
    });

    return filteredLinks;
  }

  /**
   * Returns a processed absolute link.
   * @param link
   */
  private processLinks(link: string): string {
    // get rid of all relative links
    if (link && link.includes('http')) {
      return link;
    }

    return null;
  }
}
