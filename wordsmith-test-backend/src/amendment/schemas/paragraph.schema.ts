import * as mongoose from 'mongoose';
import { RunSchema } from './run.schema';

export const ParagraphSchema = new mongoose.Schema({
  runs: [RunSchema],
});
