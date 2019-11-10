import { Router, Request, Response } from 'express';
import Hotel from '../models/hotel.schema';

class HotelsController {
  public path = '/hotels';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('', this.getAllHotels);
  }

  public getAllHotels = async (req: Request, res: Response) => {
    console.log('test 2');
    const hotels = await Hotel.find();

    return res.status(200).json({
      status: 'success',
      results: hotels.length,
      data: { hotels }
    });
  };
}

export default HotelsController;
