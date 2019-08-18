import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { HotelsService } from '../services/hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  public async getHotels() {
    // add filtering, sorting, paginating, limiting
    // add db connection
    const hotels = await this.hotelsService.getHotels();

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
  public async createNewHotel() {
    return { message: 'test' };
  }

  @Patch(':id')
  public async updateHotelData(@Param() id: string) {
    return { message: 'test', id };
  }
}
