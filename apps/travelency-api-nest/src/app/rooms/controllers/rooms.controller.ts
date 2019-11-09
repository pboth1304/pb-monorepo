import {
  Controller,
  Query,
  Get,
  Param,
  Post,
  Body,
  Patch
} from '@nestjs/common';
import { JSendResponse } from '@pb-monorepo/travelency/models';
import { CreateRoomDto } from '../dto/create-room.dto';
import { RoomsService } from '../services/rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  public async getAllRooms(@Query() query): Promise<JSendResponse> {
    const rooms = await this.roomsService.getAllRooms(query);

    return {
      status: 'success',
      results: rooms.length,
      data: { rooms }
    };
  }

  @Get(':id')
  public async getRoomById(@Param() roomId: string): Promise<JSendResponse> {
    return {
      status: 'success',
      data: { res: 'get room' }
    };
  }

  @Post()
  public async createNewRoom(
    @Body() createRoomDto: CreateRoomDto
  ): Promise<JSendResponse> {
    const newRoom = await this.roomsService.createRoom(createRoomDto);

    return {
      status: 'success',
      data: { newRoom }
    };
  }

  @Patch(':id')
  public async updateRoomData(
    @Param() roomId: string,
    @Body() room
  ): Promise<JSendResponse> {
    return {
      status: 'success',
      data: { res: 'update room' }
    };
  }
}
