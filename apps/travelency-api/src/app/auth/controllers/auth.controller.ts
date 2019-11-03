import { Controller } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

  // login
  // logout
  // signup
  // forgotPassword
  // resetPassword
  // updatePassword
}
