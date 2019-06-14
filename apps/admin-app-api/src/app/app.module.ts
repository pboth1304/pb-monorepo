import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RessourcesModule } from './ressources/ressources.module';

@Module({
  imports: [RessourcesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
