import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomTerminusModule } from '@pb-monorepo/shared/terminus';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    CustomTerminusModule,
    MongooseModule.forRoot(
      `mongodb+srv://${environment.DB_USER}:${
        environment.DB_PASSWORD
      }@cluster-se-01-5keod.mongodb.net/searchengine?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
    ),
    SearchModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
