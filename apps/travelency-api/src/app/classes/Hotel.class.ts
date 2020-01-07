import { model, Model } from 'mongoose';
import { HotelDoc } from '@pb-monorepo/travelency/models';
import HotelSchema from '../schemas/hotel.schema';

class Hotel {
  private model: Model<HotelDoc>;

  constructor() {
    this.initModel();
  }

  private initModel(): void {
    this.model = model<HotelDoc>('Hotel', HotelSchema);
  }

  /**
   * Getter for Hotel Model.
   */
  public getHotelModel(): Model<HotelDoc> {
    return this.model;
  }
}

export default Hotel;
