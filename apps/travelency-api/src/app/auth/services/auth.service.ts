import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/services/users.service';
import { User } from '@pb-monorepo/travelency/models';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  private async validate(userData: User): Promise<User> {
    return await this.userService.findUserByEmail(userData.email);
  }

  public async login(user: User): Promise<any | { status: number }> {
    const userData = await this.validate(user);

    if (!userData) {
      return { status: 404 };
    }

    const payload = `${userData.name}${userData['_id']}`;
    const accessToken = this.jwtService.sign(payload);
    console.log('payload', payload);
    console.log('accessToken', accessToken);

    return {
      expires_in: 3600,
      access_token: accessToken,
      user_id: payload,
      status: 200
    };
  }

  public async signUp(user: User): Promise<any> {
    return this.userService.createNewUser(user);
  }
}
