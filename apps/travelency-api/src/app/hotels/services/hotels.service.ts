import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HotelDoc } from '@pb-monorepo/travelency/models';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<HotelDoc>
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<HotelDoc> {
    const createdHotel = new this.hotelModel(createHotelDto);
    return await createdHotel.save();
  }

  public async getHotels() {
    return await this.hotelModel.find().exec();
  }
}
