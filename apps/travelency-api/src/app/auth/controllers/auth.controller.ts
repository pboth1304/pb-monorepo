import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from '@pb-monorepo/travelency/models';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // login
  // logout
  // signup
  // forgotPassword
  // resetPassword
  // updatePassword

  @Post('login')
  async login(@Body() user: User): Promise<any> {
    return this.authService.login(user);
  }

  @Post('signup')
  async register(@Body() user: User): Promise<any> {
    return this.authService.signUp(user);
  }
}
