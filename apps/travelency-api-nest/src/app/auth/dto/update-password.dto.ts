import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly currentPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly newPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly newPasswordConfirm: string;
}
