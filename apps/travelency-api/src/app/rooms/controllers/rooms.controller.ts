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

@Controller('rooms')
export class RoomsController {
  @Get()
  public async getAllRooms(@Query() query): Promise<JSendResponse> {
    return {
      status: 'success',
      results: null,
      data: { res: 'get all rooms' }
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
  public async createNewRoom(@Body() createRoomDto): Promise<JSendResponse> {
    return {
      status: 'success',
      data: { res: 'create new Room' }
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
