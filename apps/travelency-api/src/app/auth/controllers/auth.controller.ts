import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Patch,
  Req
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from '@pb-monorepo/travelency/models';
import { AuthGuard } from '@nestjs/passport';

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

  /**
   * TODO: implement logout after jwt with cookies implemented
   */
  @Get('logout')
  async logout(): Promise<any> {}

  @UseGuards(AuthGuard('jwt'))
  @Patch('updatePassword')
  async updatePassword(
    @Req() req: Request,
    @Body() { currentPassword, newPassword, newPasswordConfirm }
  ) {
    const { userId } = req['user'];

    return this.authService.updateUsersPassword(
      userId,
      currentPassword,
      newPassword,
      newPasswordConfirm
    );
  }
}
