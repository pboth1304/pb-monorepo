import { Document } from 'mongoose';
import { TagModel } from './tag.interface';

export interface RessourceModel extends Document {
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly tags?: TagModel[];
}
