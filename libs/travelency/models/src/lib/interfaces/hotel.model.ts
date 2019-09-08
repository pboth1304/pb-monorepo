import { Amenity } from './amenity.model';

export interface Hotel {
  name: string;
  description: string;
  slug: string;
  createdAt: Date;
  imageCover: string;
  images: string[];
  amenities: Amenity[];
}
