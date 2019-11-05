import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
  Req
} from '@nestjs/common';
import { HotelsService } from '../services/hotels.service';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { JSendResponse, Hotel } from '@pb-monorepo/travelency/models';
import { AuthGuard } from '@nestjs/passport';
import { UpdateHotelDto } from '../dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  /**
   * GET all Hotels
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  public async getAllHotels(@Query() query): Promise<JSendResponse> {
    const hotels = await this.hotelsService.getAllHotels(query);

    return {
      status: 'success',
      results: hotels.length,
      data: { hotels }
    };
  }

  /**
   * GET one Hotel by its ID.
   * @param params Object of url params
   */
  @Get(':id')
  public async getHotel(@Param() params: { hotelId: string }): Promise<
    JSendResponse
  > {
    const hotel = await this.hotelsService.getHotel(params.hotelId);

    return {
      status: 'success',
      data: { hotel }
    };
  }

  /**
   * POST to create one new Hotel.
   * @param createHotelDto
   */
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

  /**
   * PATCH to update the data of one Hotel.
   */
  @Patch(':id')
  public async updateHotelData(
    @Param() params: string,
    @Body() hotel: UpdateHotelDto
  ): Promise<JSendResponse> {
    const updatedHotel = await this.hotelsService.updateHotel(
      params['id'],
      hotel
    );

    return {
      status: 'success',
      data: { updatedHotel }
    };
  }
}
