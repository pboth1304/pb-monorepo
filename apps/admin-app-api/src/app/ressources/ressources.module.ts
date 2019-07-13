import { Module } from '@nestjs/common';
import { RessourcesController } from './controller/ressources.controller';
import { RessourcesService } from './service/ressources.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RessourceSchema } from './schemas/ressource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ressource', schema: RessourceSchema }])
  ],
  controllers: [RessourcesController],
  providers: [RessourcesService]
})
export class RessourcesModule {}
