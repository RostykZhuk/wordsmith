import * as mongoose from 'mongoose';

export const FontSchema = new mongoose.Schema({
  sizePt: {
    type: Number,
    default: 16,
  },
  bold: Boolean,
  italic: Boolean,
  underline: Boolean,
  name: String,
});
