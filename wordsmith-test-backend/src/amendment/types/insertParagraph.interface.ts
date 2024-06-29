import { AmendmentType } from '../constants/amendmentType';
import { IParagraph } from './paragraph.interface';

export interface IInsertParagraph {
  amendmentType: typeof AmendmentType;
  originalParagraphs: IParagraph[];
  paragraphs: IParagraph[];
  approved: boolean;
}
