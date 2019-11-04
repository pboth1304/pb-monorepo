import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/services/users.service';
import { User, JSendResponse } from '@pb-monorepo/travelency/models';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Validates the existance of the given User.
   * @param userData
   */
  private async validateUser(userData: User): Promise<User> {
    return await this.userService.findUserByEmail(userData.email);
  }

  public async login(user: User): Promise<JSendResponse> {
    const userData = await this.validateUser(user);

    if (!userData) {
      return {
        status: 'fail',
        data: null
      };
    }

    const token = this.signToken(userData['_id']); // TODO: _id into interface

    return {
      status: 'success',
      data: {
        token,
        expires_in: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        user
      }
    };
  }

  public async signUp(user: User): Promise<User> {
    return this.userService.createNewUser(user);
  }

  private signToken(id): string {
    return this.jwtService.sign({ id });
  }
}
