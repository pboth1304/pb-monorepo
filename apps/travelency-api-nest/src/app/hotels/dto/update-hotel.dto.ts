import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

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
  readonly images: string[];

  @IsOptional()
  readonly amenities: string[];

  @IsOptional()
  @IsString()
  readonly slug: string;
}
