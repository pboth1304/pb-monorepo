import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateHotelDto {
  @IsOptional()
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly imageCover: string;

  @IsOptional()
  @IsArray()
  readonly images: string[];

  @IsOptional()
  @IsArray()
  readonly amenities: string[];

  @IsOptional()
  @IsString()
  readonly slug: string;
}
