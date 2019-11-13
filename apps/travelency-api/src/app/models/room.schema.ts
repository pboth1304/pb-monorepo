import { Schema } from 'mongoose';
import { RoomDoc } from '@pb-monorepo/travelency/models';
import slugify from 'slugify';

const RoomSchema = new Schema<RoomDoc>(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Room must belong to a hotel.']
    },
    name: {
      type: String,
      required: [true, 'A room must have a name'],
      trim: true
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A room must have a description']
    },
    size: {
      type: Number,
      required: [true, 'A room must have a size']
    },
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    imageCover: {
      type: String,
      required: [true, 'A room must have a cover image']
    },
    images: [String],
    amenities: [String],
    isAvailable: { type: Boolean, default: true }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

RoomSchema.pre('save', function(next) {
  const room = this as any; // set this as any because of tslint errors

  room.slug = slugify(room.name, { lower: true });
  next();
});

export default RoomSchema;
