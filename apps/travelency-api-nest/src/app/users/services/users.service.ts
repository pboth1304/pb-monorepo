import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDoc, User } from '@pb-monorepo/travelency/models';
import { CreateUserDto } from '../dto/create-user.dto';
import { QueryUtils } from '../../utils/classes/QueryUtils';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDoc>
  ) {}

  public getUserModel() {
    return this.userModel;
  }

  public async findAllUsers(queryStr?: {
    [key: string]: string;
  }): Promise<User> {
    const query = new QueryUtils(this.userModel, queryStr)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    return await query.model;
  }

  public async findUserById(userId: string): Promise<User> {
    return await this.userModel.findById(userId);
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  public async createNewUser(user: CreateUserDto): Promise<User> {
    if (!user) {
      return;
    }

    return await this.userModel.create(user);
  }

  public async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto
  ): Promise<User> {
    if (!userId) {
      return;
    }
    console.log('user', updateUserDto);

    return await this.userModel.findByIdAndUpdate(userId, updateUserDto, {
      new: true,
      runValidators: true
    });
  }

  public async getMe(userId: string): Promise<User> {
    if (!userId) {
      return;
    }

    return await this.userModel.findById(userId);
  }

  public async updateMe(userId: string): Promise<User> {
    if (!userId) {
      return;
    }

    return await this.userModel.findById(userId);
  }

  public async deleteMe(userId: string): Promise<User> {
    if (!userId) {
      return;
    }

    return await this.userModel.findByIdAndDelete(userId);
  }
}
