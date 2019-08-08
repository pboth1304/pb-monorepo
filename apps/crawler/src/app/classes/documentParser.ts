export default class DocumentParser {
  /**
   * Returns title of the given page.
   * @param $
   */
  public getTitle($: CheerioStatic): string {
    return $('title').text();
  }

  /**
   * Returns description of given page.
   * @param $
   */
  public getDescription($: CheerioStatic): string {
    return $(`meta[name=description]`).attr('content');
  }

  /**
   * Returns keywords of given page.
   * @param $
   */
  public getKeywords($: CheerioStatic): string {
    return $(`meta[name=keywords]`).attr('content');
  }

  /**
   * Returns every link of the page.
   * But only if it has a href attribute and is no relative link.
   * @param $
   */
  public getLinks($: CheerioStatic) {
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
  public processLinks(link: string): string {
    // get rid of all relative links
    if (link && link.includes('http')) {
      return link;
    }

    return null;
  }
}
