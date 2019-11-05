import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/services/users.service';
import { User, JSendResponse, UserDoc } from '@pb-monorepo/travelency/models';
import { environment } from '../../../environments/environment';
import { CreateUserDto } from '../../users/dto/create-user.dto';

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
  private async validateUser({ email }: { email: string }): Promise<UserDoc> {
    return await this.userService
      .getUserModel()
      .findOne({ email })
      .select('+password');
  }

  public async login(user: User): Promise<JSendResponse> {
    if (!user.email || !user.password) {
      return {
        status: 'fail',
        data: { msg: 'Please provide your email and password.' }
      };
    }

    const userData = await this.validateUser(user);

    if (!userData) {
      return {
        status: 'fail',
        data: { msg: 'This user does not exist.' }
      };
    }

    if (
      !(await userData.checkPasswordIsCorrect(user.password, userData.password))
    ) {
      return {
        status: 'fail',
        data: { msg: 'Provided password is not correct.' }
      };
    }

    const token = this.signToken(userData['_id']); // TODO: _id into interface

    return {
      status: 'success',
      data: {
        token,
        expires_in: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        user: userData
      }
    };
  }

  public async signUp(user: CreateUserDto): Promise<JSendResponse> {
    const newUser = await this.userService.createNewUser(user);

    const token = this.signToken(newUser['_id']);

    return {
      status: 'success',
      data: {
        token,
        expires_in: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        user: newUser
      }
    };
  }

  public async updateUsersPassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ): Promise<JSendResponse> {
    const user = await this.userService
      .getUserModel()
      .findById(userId)
      .select('password');

    if (!newPasswordConfirm) {
      return {
        status: 'fail',
        data: { msg: 'Please confirm your new Password.' }
      };
    }

    if (!(await user.checkPasswordIsCorrect(currentPassword, user.password))) {
      return {
        status: 'fail',
        data: { msg: 'Provided password is not correct.' }
      };
    }

    user.password = newPassword;
    user.passwordConfirm = newPasswordConfirm;
    await user.save();

    const token = this.signToken(user.id);

    return {
      status: 'success',
      data: {
        token,
        user
      }
    };
  }

  private signToken(id): string {
    return this.jwtService.sign({ id });
  }
}
