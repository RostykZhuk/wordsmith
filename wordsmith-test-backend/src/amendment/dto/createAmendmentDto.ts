import { Types } from 'mongoose';

enum AmendmentType {
  MODIFY_RUN = 'modify_run',
  INSERT_PARAGRAPHS = 'insert_paragraphs',
}

export class ModifyRunDTO {
  amendmentType: AmendmentType = AmendmentType.MODIFY_RUN;
  originalText: string;
  text: string;
  approved: boolean = false;

  constructor(originalText: string, text: string, approved: boolean = false) {
    this.originalText = originalText;
    this.text = text;
    this.approved = approved;
  }
}

class FontDTO {
  sizePt: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  name: string;

  constructor(
    sizePt: number,
    bold: boolean,
    italic: boolean,
    underline: boolean,
    name: string,
  ) {
    this.sizePt = sizePt;
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.name = name;
  }
}

class RunDTO {
  text: string;
  font: FontDTO;

  constructor(text: string, font: FontDTO) {
    this.text = text;
    this.font = font;
  }
}

class ParagraphDTO {
  runs: RunDTO[];

  constructor(runs: RunDTO[]) {
    this.runs = runs;
  }
}

export class InsertParagraphsDTO {
  amendmentType: AmendmentType = AmendmentType.INSERT_PARAGRAPHS;
  originalParagraphs: ParagraphDTO[];
  paragraphs: ParagraphDTO[];
  approved: boolean = false;

  constructor(
    originalParagraphs: ParagraphDTO[],
    paragraphs: ParagraphDTO[],
    approved: boolean = false,
  ) {
    this.originalParagraphs = originalParagraphs;
    this.paragraphs = paragraphs;
    this.approved = approved;
  }
}

export class AmendmentSetDTO {
  id: Types.ObjectId;
  paragraphsInsertions: Types.ObjectId[];
  runAmendments: Types.ObjectId[];
  title: string;
  description: string;

  constructor(
    id: Types.ObjectId,
    paragraphsInsertions: Types.ObjectId[],
    runAmendments: Types.ObjectId[],
    title: string,
    description: string,
  ) {
    this.id = id;
    this.paragraphsInsertions = paragraphsInsertions;
    this.runAmendments = runAmendments;
    this.title = title;
    this.description = description;
  }
}
