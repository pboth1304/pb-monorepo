import { model, Model } from 'mongoose';
import { UserDoc } from '@pb-monorepo/travelency/models';
import UserSchema from '../schemas/user.schema';

class User {
  private model: Model<UserDoc>;

  constructor() {
    this.initModel();
  }

  private initModel(): void {
    this.model = model<UserDoc>('User', UserSchema);
  }

  /**
   * Getter for User Model.
   */
  public getUserModel(): Model<UserDoc> {
    return this.model;
  }

  /**
   * Validates the existance of the given User.
   * @param userData
   */
  public async validateUser(email: string): Promise<UserDoc> {
    return this.model.findOne({ email }).select('+password');
  }
}

export default User;
