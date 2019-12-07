import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { IWebsite } from '@pb-monorepo/shared/models';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel('Website')
    private readonly websiteModel: Model<any>
  ) {}

  /**
   * Returns all Websites by the specified search params.
   */
  public async getWebsitesBySearchparams(
    searchParam: string
  ): Promise<IWebsite[]> {
    // {"$or": [{"title": {$regex: 'ageah'}}, {url: {$regex: 'ageah'}}, {description: {$regex: 'ageah'}}, {links: {$regex: 'instagram'}}]}
    Logger.log('searchparam' + searchParam);
    return await this.websiteModel
      .find({
        $or: [
          { title: { $regex: `/.*${searchParam}.*` } },
          { url: { $regex: `/.*${searchParam}.*` } },
          { description: { $regex: `/.*${searchParam}.*` } }
          // { links: { $regex: `/.*${searchParam}.*` } } TODO search for links on site and display this keywords on frontend
        ]
      })
      .exec();
  }
}
