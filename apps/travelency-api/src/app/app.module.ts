import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { UtilsModule } from './utils/utils.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

@Module({
  imports: [
    HotelsModule,
    UtilsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${environment.DB_USER}:${
        environment.DB_PASSWORD
      }@travelency-cluster-9wswh.mongodb.net/travelency?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
