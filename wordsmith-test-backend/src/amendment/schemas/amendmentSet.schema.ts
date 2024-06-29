import * as mongoose from 'mongoose';
import { ParagraphSchema } from './paragraph.schema';
import { ModifyRunSchema } from './modify-run.schema';

export const AmendmentSetSchema = new mongoose.Schema({
  title: String,
  description: String,
  paragraphsInsertions: [ParagraphSchema],
  runAmendments: [ModifyRunSchema],
  approved: Boolean,
});
