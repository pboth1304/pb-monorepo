import { Router, Request, Response } from 'express';
import Hotel from '../models/hotel.schema';

class HotelsController {
  public path = '/hotels';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get('', this.getAllHotels);
    this.router.get('/:hotelId', this.getHotelById);
  }

  public async getAllHotels(req: Request, res: Response): Promise<void> {
    const hotels = await Hotel.find();

    res.status(200).json({
      status: 'success',
      results: hotels.length,
      data: { hotels }
    });
  }

  public async getHotelById(req: Request, res: Response): Promise<void> {
    const { hotelId } = req.params;

    // return Hotel.findById(hotelId).populate('rooms');
    const hotel = await Hotel.findById(hotelId);

    res.status(200).json({ status: 'success', data: { hotel } });
  }
}

export default HotelsController;
