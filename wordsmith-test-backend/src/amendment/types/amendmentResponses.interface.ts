import { HttpStatus } from '@nestjs/common';

export interface AmendmentResponseInterface {
  status: HttpStatus;
  response: string;
}
