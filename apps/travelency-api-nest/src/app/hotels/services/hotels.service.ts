import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HotelDoc, Hotel } from '@pb-monorepo/travelency/models';
import { QueryUtils } from '../../utils/classes/QueryUtils';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
import slugify from 'slugify';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<HotelDoc>
  ) {}

  /**
   * Updates Hotel.
   */
  public async updateHotel(
    hotelId: string,
    updatedHotel: UpdateHotelDto
  ): Promise<HotelDoc> {
    let hotelToUpdate = { ...updatedHotel };

    if (updatedHotel.name) {
      const newSlug = slugify(updatedHotel.name, { lower: true });
      hotelToUpdate = { ...hotelToUpdate, slug: newSlug };
    }

    return await this.hotelModel.findByIdAndUpdate(hotelId, hotelToUpdate, {
      new: true,
      runValidators: true
    });
  }

  /**
   * Creates new Hotel.
   */
  public async createHotel(createHotelDto: CreateHotelDto): Promise<HotelDoc> {
    return await this.hotelModel.create(createHotelDto);
  }

  /**
   * Returns all Hotels of the hotel collection, filtered, sorted, limited and paginated.
   * @param queryStr object of query strings
   */
  public async getAllHotels(queryStr?: {
    [key: string]: string;
  }): Promise<Hotel[]> {
    const query = new QueryUtils(this.hotelModel, queryStr)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    return await query.model;
  }

  /**
   * Returns one Hotel by its id.
   * @param id hotelId
   */
  public async getHotel(id: string): Promise<Hotel> {
    return this.hotelModel.findById(id).populate('rooms');
  }
}
