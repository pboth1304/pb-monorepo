import {
  Controller,
  UseGuards,
  Get,
  Query,
  Req,
  Delete,
  Body,
  Patch,
  Param
} from '@nestjs/common';
import { UserService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';
import { JSendResponse } from '@pb-monorepo/travelency/models';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  /**
   * GET me
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  public async getMe(@Req() req: Request): Promise<JSendResponse> {
    const { userId } = req['user'];

    const user = await this.usersService.getMe(userId);

    return {
      status: 'success',
      data: { user }
    };
  }

  /**
   * DELETE me
   */
  @UseGuards(AuthGuard('jwt'))
  @Delete('/me')
  public async deleteMe(@Req() req: Request): Promise<JSendResponse> {
    const { userId } = req['user'];

    await this.usersService.deleteMe(userId);

    return {
      status: 'success',
      data: null
    };
  }

  /**
   * UPDATE me
   */
  @UseGuards(AuthGuard('jwt'))
  @Delete('/me')
  public async updateMe(
    @Req() req: Request,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<JSendResponse> {
    const { userId } = req['user'];

    await this.usersService.updateMe(userId);

    return {
      status: 'success',
      data: null
    };
  }

  // GET ME
  // DELETE Me
  // UPDATE ME

  // GET all users
  // GET one User by its ID
  // UPDATE one User by its ID
  // DELETE one User by its ID
  // CREATE one User

  /**
   * GET all Users
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  public async getAllUsers(@Query() query): Promise<JSendResponse> {
    const users = await this.usersService.findAllUsers(query);

    return {
      status: 'success',
      data: { users }
    };
  }

  /**
   * PATCH Users
   */
  @UseGuards(AuthGuard('jwt'))
  @Patch(':userId')
  public async updateUser(
    @Param() params: { userId: string },
    @Body() body: UpdateUserDto
  ): Promise<JSendResponse> {
    const user = await this.usersService.updateUser(params.userId, body);

    return {
      status: 'success',
      data: { user }
    };
  }
}
