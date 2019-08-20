import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HotelDoc } from '@pb-monorepo/travelency/models';
import { QueryUtils } from '../../utils/classes/QueryUtils';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<HotelDoc>
  ) {}

  async createHotel(createHotelDto: CreateHotelDto): Promise<HotelDoc> {
    const createdHotel = new this.hotelModel(createHotelDto);
    return await createdHotel.save();
  }

  /**
   * Returns all Hotels of the hotel collection.
   * @param queryStr object of query strings
   */
  public async getHotels(queryStr?: { [key: string]: string }) {
    const query = new QueryUtils(this.hotelModel, queryStr)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    return await query.model;
  }
}
