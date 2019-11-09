import { IsNotEmpty, IsString, IsNumber, ArrayMaxSize } from 'class-validator';
import { Amenity } from '@pb-monorepo/travelency/models';

export class CreateRoomDto {
  @IsNotEmpty()
  @ArrayMaxSize(1)
  readonly hotel: string[];

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly size: number;

  @IsNotEmpty()
  @IsString()
  readonly imageCover: string;

  readonly images: string[];

  readonly amenities: Amenity[];
}
