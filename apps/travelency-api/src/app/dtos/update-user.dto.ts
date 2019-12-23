import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export enum UserRoles {
  Admin = 'admin',
  User = 'user'
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  readonly name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsOptional()
  @IsEnum(UserRoles)
  readonly role: UserRoles;

  @IsBoolean()
  @IsOptional()
  readonly active: boolean;
}
