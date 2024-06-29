import * as mongoose from 'mongoose';
import { AmendmentType } from '../constants/amendmentType';
import { ParagraphSchema } from './paragraph.schema';

export const InsertParagraphsSchema = new mongoose.Schema({
  amendmentType: {
    type: String,
    default: AmendmentType.INSERT_PARAGRAPHS,
  },
  originalParagraphs: [ParagraphSchema],
  paragraphs: [ParagraphSchema],
  approved: Boolean,
});
