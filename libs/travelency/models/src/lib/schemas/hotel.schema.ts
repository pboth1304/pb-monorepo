import { Schema } from 'mongoose';

export const HotelSchema = new Schema({
  name: String,
  description: String
});
