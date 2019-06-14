import { Module } from '@nestjs/common';
import { RessourcesController } from './controller/ressources.controller';
import { RessourcesService } from './service/ressources.service';

@Module({
  controllers: [RessourcesController],
  providers: [RessourcesService]
})
export class RessourcesModule {}
