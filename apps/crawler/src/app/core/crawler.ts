import nodeFetch from 'node-fetch';
import * as cheerio from 'cheerio';

/**
 * 1) pass in urls to crawl (constructor?)
 * 3) check on database if page is already there
 * 3) if not, Ffetch page of each given url
 * 4) parse html of response
 * 5) get meta tags if provided (page description, categories, etc)
 * 6) get links of page
 * 7) write page to db
 */
export class Crawler {
  private urls: string[];

  constructor(...urls: string[]) {
    this.urls = urls;
    this.fetchWebsitesByUrl();
  }

  private fetchWebsitesByUrl() {
    const websiteObjs = this.urls.map(async url => {
      const res = await nodeFetch(url);
      const html = await res.text();

      const $ = cheerio.load(html);

      const description = this.getDescriptionOfWebsite($);

      // const links = console.log('res', description);

      return { description: description ? description : null };
    });

    console.log('objs', websiteObjs);
  }

  private getDescriptionOfWebsite($: CheerioStatic): string {
    return $(`meta[name=description]`).attr('content');
  }

  // private getLinksOfWebsite($: CheerioStatic): string {
  //   return $(`meta[name=description]`).attr('content');
  // }
}
