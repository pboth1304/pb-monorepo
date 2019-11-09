import { Router } from 'express';

const hotelRouter = Router();

hotelRouter.get('/', (req, res) => {
  res.send({ message: 'Hotels!' });
});

export default hotelRouter;
