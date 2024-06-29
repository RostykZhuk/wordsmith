import { Types } from 'mongoose';
import { IInsertParagraph } from './insertParagraph.interface';
import { IModifyRun } from './modifyRun.interface';

export interface IAmendmentSet {
  _id: Types.ObjectId;
  title: string;
  description: string;
  paragraphsInsertions: IInsertParagraph[];
  runAmendments: IModifyRun[];
  approved: boolean;
}
