import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateHotelDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly imageCover: string;

  readonly images: string[];

  readonly amenities: string[];
}
