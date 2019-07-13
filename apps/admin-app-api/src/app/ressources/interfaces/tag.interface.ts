import { Document } from 'mongoose';

export interface TagModel extends Document {
  readonly name: String;
  readonly type: String;
}
