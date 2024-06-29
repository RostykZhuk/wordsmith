import * as mongoose from 'mongoose';
import { FontSchema } from './font.schema';

export const RunSchema = new mongoose.Schema({
  text: String,
  font: FontSchema,
});
