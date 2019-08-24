import { Schema } from 'mongoose';
import { HotelDoc } from '@pb-monorepo/travelency/models';
import slugify from 'slugify';

const HotelSchema = new Schema<HotelDoc>(
  {
    name: {
      type: String,
      required: [true, 'A hotel must have a name'],
      unique: true,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a description']
    },
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    imageCover: {
      type: String,
      required: [true, 'A hotel must have a cover image']
    },
    images: [String],
    amenities: [String]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

HotelSchema.pre('save', function(next) {
  const hotel = this as any; // set this as any because of tslint errors

  hotel.slug = slugify(hotel.name, { lower: true });
  next();
});

export default HotelSchema;
