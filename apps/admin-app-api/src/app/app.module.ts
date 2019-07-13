import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RessourcesModule } from './ressources/ressources.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

@Module({
  imports: [
    RessourcesModule,
    MongooseModule.forRoot(
      `mongodb+srv://admin:${
        environment.DB_PASSWORD
      }@cluster0-tnoqw.mongodb.net/adminapp?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
