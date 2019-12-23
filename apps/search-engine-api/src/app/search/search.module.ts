import { Module } from '@nestjs/common';
import { SearchController } from './controllers/search.controller';
import { SearchService } from './services/search.service';
import { WebsiteSchema } from './schemas/website.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SearchController],
  imports: [
    MongooseModule.forFeature([{ name: 'Website', schema: WebsiteSchema }])
  ],
  providers: [SearchService]
})
export class SearchModule {}
