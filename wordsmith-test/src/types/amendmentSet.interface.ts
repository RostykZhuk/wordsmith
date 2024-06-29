import { IInsertParagraph } from './insertParagraph.interface';
import { IModifyRun } from './modifyRun.interface';

export interface IAmendmentSet {
  _id: string;
  title: string;
  description: string;
  paragraphsInsertions: IInsertParagraph[];
  runAmendments: IModifyRun[];
  approved: boolean;
}
