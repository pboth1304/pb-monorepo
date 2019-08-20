import { Schema } from 'mongoose';

export const HotelSchema = new Schema({
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});
