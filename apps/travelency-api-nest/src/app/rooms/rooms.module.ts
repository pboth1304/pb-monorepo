import { Module } from '@nestjs/common';
import { RoomsController } from './controllers/rooms.controller';
import { RoomsService } from './services/rooms.service';
import { UtilsModule } from '../utils/utils.module';
import { MongooseModule } from '@nestjs/mongoose';
import RoomSchema from './schemas/room.schema';

@Module({
  imports: [
    UtilsModule,
    MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
