import * as mongoose from 'mongoose';
import { TagSchema } from './tag.schema';

export const RessourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
//   tags: [TagSchema]
});
