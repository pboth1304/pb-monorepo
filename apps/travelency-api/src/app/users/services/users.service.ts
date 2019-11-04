import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDoc, User } from '@pb-monorepo/travelency/models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDoc>
  ) {}

  public getUserModel() {
    return this.userModel;
  }

  public async findUserById(userId: string): Promise<User> {
    return await this.userModel.findById(userId);
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  public async createNewUser(user: User): Promise<User> {
    return await this.userModel.create(user);
  }
}