import { IsNotEmpty, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

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

  readonly images: string[];

  readonly amenities: string[];
}
