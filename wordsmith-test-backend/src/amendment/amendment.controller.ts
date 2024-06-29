import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AmendmentService } from './amendment.service';

@Controller('amendments')
export class AmendmentController {
  constructor(private readonly amendmentService: AmendmentService) {}

  @Post()
  create(@Body() createAmendmentSetDto: any) {
    return this.amendmentService.create(createAmendmentSetDto);
  }

  @Get()
  findAll() {
    return this.amendmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amendmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmendmentSetDto: any) {
    return this.amendmentService.update(id, updateAmendmentSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amendmentService.remove(id);
  }
}

// {
//     "title": "Amendment Set 1",
//   "description": "This is the first mock amendment set."б
//   "paragraphsInsertions": [
//     {
//       "amendmentType": "insertParagraphs",
//       "originalParagraphs": [
//         {
//           "runs": [
//             {
//               "text": "Original text of the first paragraph.",
//               "font": {
//                 "sizePt": 12,
//                 "bold": false,
//                 "italic": false,
//                 "underline": false,
//                 "name": "Arial"
//               }
//             }
//           ]
//         },
//         {
//           "runs": [
//             {
//               "text": "Original text of the second paragraph.",
//               "font": {
//                 "sizePt": 12,
//                 "bold": false,
//                 "italic": true,
//                 "underline": false,
//                 "name": "Times New Roman"
//               }
//             }
//           ]
//         }
//       ],
//       "paragraphs": [
//         {
//           "runs": [
//             {
//               "text": "Inserted text of the first paragraph.",
//               "font": {
//                 "sizePt": 12,
//                 "bold": true,
//                 "italic": false,
//                 "underline": false,
//                 "name": "Arial"
//               }
//             }
//           ]
//         },
//         {
//           "runs": [
//             {
//               "text": "Inserted text of the second paragraph.",
//               "font": {
//                 "sizePt": 12,
//                 "bold": false,
//                 "italic": true,
//                 "underline": true,
//                 "name": "Times New Roman"
//               }
//             }
//           ]
//         }
//       ],
//       "approved": true
//     }
//   ],
//   "runAmendments": [
//     {
//       "amendmentType": "modify_run",
//       "originalText": "Original run text.",
//       "text": "Modified run text.",
//       "approved": false
//     }
//   ],
// }
