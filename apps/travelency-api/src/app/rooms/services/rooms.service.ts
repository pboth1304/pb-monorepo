import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDoc, Room } from '@pb-monorepo/travelency/models';
import { QueryUtils } from '../../utils/classes/QueryUtils';
import { CreateRoomDto } from '../dto/create-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel('Room') private readonly roomModel: Model<RoomDoc>
  ) {}

  /**
   * Creates new Room.
   */
  public async createRoom(createRoomlDto: CreateRoomDto): Promise<RoomDoc> {
    return await this.roomModel.create(createRoomlDto);
  }

  /**
   * Returns all rooms of the rooms collection, filtered, sorted and limited.
   * @param queryStr object of query strings
   */
  public async getAllRooms(queryStr?: {
    [key: string]: string;
  }): Promise<Room[]> {
    const query = new QueryUtils(this.roomModel, queryStr)
      .filter()
      .sort()
      .limitFields();

    return await query.model;
  }
}
