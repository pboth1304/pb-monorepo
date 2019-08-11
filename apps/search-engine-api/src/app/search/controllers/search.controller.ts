import { Controller, Get, Logger, Query } from '@nestjs/common';
import { IWebsite } from '@pb-monorepo/shared/models';
import { SearchService } from '../services/search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  getSearchResults(@Query('q') searchParam: string): Promise<IWebsite[]> {
    Logger.log('q' + searchParam);
    return this.searchService.getWebsitesBySearchparams(searchParam);
  }
}
