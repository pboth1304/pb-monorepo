import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from '@pb-monorepo/travelency/models';

const EXPORTED_SERVICES = [UtilsService];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }])
  ],
  providers: [...EXPORTED_SERVICES],
  exports: [...EXPORTED_SERVICES]
})
export class UtilsModule {}
