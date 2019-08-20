import { Module } from '@nestjs/common';
import { HotelsController } from './controllers/hotels.controller';
import { HotelsService } from './services/hotels.service';
import { UtilsModule } from '../utils/utils.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './schemas';

@Module({
  imports: [
    UtilsModule,
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }])
  ],
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule {}
