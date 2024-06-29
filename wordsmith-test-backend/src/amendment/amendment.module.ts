import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AmendmentController } from './amendment.controller';
import { AmendmentService } from './amendment.service';
import { AmendmentSetSchema } from './schemas/amendmentSet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AmendmentSet', schema: AmendmentSetSchema },
    ]),
  ],
  controllers: [AmendmentController],
  providers: [AmendmentService],
})
export class AmendmentModule {}
