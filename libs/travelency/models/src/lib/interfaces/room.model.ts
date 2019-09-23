import { Amenity } from './amenity.model';

export interface Room {
  hotel: string;
  name: string;
  description: string;
  size: number;
  slug: string;
  createdAt: Date;
  imageCover: string;
  images: string;
  amenities: Amenity[];
  isAvailable: boolean;
}
