import { Router } from 'express';
import Hotel from '../models/hotel.schema';

const HotelRouter = Router();

HotelRouter.get('/', async (req, res) => {
  const doc = await Hotel.find();

  return res.status(200).json({ doc });
});

export default HotelRouter;
