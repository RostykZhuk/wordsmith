import * as mongoose from 'mongoose';
import { AmendmentType } from '../constants/amendmentType';

export const ModifyRunSchema = new mongoose.Schema({
  amendmentType: {
    type: String,
    enum: Object.values(AmendmentType),
    default: AmendmentType.MODIFY_RUN,
  },
  originalText: String,
  text: String,
  approved: {
    type: Boolean,
    default: false,
  },
});
