import { model, Model } from 'mongoose';
import { UserDoc } from '@pb-monorepo/travelency/models';
import UserSchema from '../models/user.schema';

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
}

export default User;
