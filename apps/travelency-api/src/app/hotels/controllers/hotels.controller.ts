import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query
} from '@nestjs/common';
import { HotelsService } from '../services/hotels.service';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { JSendResponse } from '@pb-monorepo/travelency/models';
import { UpdateHotelDto } from '../dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  public async getHotels(@Query() query): Promise<JSendResponse> {
    const hotels = await this.hotelsService.getHotels(query);

    return {
      status: 'success',
      results: hotels.length,
      data: { hotels }
    };
  }

  @Get(':id')
  public async getHotel(@Param() idParam: { id: string }): Promise<
    JSendResponse
  > {
    const hotel = await this.hotelsService.getHotel(idParam.id);

    return {
      status: 'success',
      data: { hotel }
    };
  }

  @Post()
  public async createNewHotel(
    @Body() createHotelDto: CreateHotelDto
  ): Promise<JSendResponse> {
    const createdHotel = await this.hotelsService.createHotel(createHotelDto);

    return {
      status: 'success',
      data: { hotel: createdHotel }
    };
  }

  @Patch(':id')
  public async updateHotelData(
    @Param() hotelId: string,
    @Body() updateHotelDto: UpdateHotelDto
  ): Promise<JSendResponse> {
    const updatedHotel = await this.hotelsService.updateHotel(
      hotelId,
      updateHotelDto
    );

    return {
      status: 'success',
      data: { updatedHotel }
    };
  }
}
