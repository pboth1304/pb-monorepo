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

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  public async getHotels(@Query() query) {
    // add filtering, sorting, paginating, limiting
    // add db connection
    const hotels = await this.hotelsService.getHotels(query);

    return {
      status: 'Success',
      results: hotels.length,
      data: { hotels }
    };
  }

  @Get(':id')
  public async getHotel(@Param() id: string) {
    return { message: 'test', id };
  }

  @Post()
  public async createNewHotel(
    @Body() createRessourceDto: CreateHotelDto
  ): Promise<void> {
    this.hotelsService.createHotel(createRessourceDto);
  }

  @Patch(':id')
  public async updateHotelData(@Param() id: string) {
    return { message: 'test', id };
  }
}
