import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Amenity } from '@pb-monorepo/travelency/models';

export class CreateHotelDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly imageCover: string;

  @IsArray()
  readonly images: string[];

  @IsArray()
  readonly amenities: Amenity[];
}
