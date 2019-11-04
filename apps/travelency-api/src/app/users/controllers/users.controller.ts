import { Controller } from '@nestjs/common';
import { UserService } from '../services/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  test() {
    this.usersService.findUserById('1234');
  }

  // GET ME
  // DELETE Me
  // UPDATE ME

  // GET all users
  // GET one User by its ID
  // UPDATE one User by its ID
  // DELETE one User by its ID
  // CREATE one User
}
