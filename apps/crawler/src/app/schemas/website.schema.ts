import { Schema, model } from 'mongoose';

const WebsiteSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  description: String,
  links: { type: [String], required: true },
  keywords: [String]
});

export default model('Website', WebsiteSchema);
