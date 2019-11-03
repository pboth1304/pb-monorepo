import { Controller } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET ME
  // DELETE Me
  // UPDATE ME

  // GET all users
  // GET one User by its ID
  // UPDATE one User by its ID
  // DELETE one User by its ID
  // CREATE one User
}
