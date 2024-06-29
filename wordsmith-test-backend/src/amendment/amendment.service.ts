import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { findAmendmentSet } from '../modifyRun/helpers/pipeline.builders';
import { AmendmentSetSchema } from './schemas/amendmentSet.schema';
import { Model } from 'mongoose';
import { AmendmentSetDTO } from './dto/createAmendmentDto';

@Injectable()
export class AmendmentService {
  constructor(
    @InjectModel('AmendmentSet')
    readonly amendmentSetModel: Model<typeof AmendmentSetSchema>,
  ) {}

  async create(createAmendmentSetDto: AmendmentSetDTO): Promise<any> {
    const createdAmendmentSet = new this.amendmentSetModel(
      createAmendmentSetDto,
    );
    return createdAmendmentSet.save();
  }

  async findAll(): Promise<any[]> {
    return this.amendmentSetModel.find().exec();
  }

  async findOne(id: string): Promise<any> {
    return this.amendmentSetModel.findById(id).exec();
  }

  async update(id: string, updateAmendmentSetDto: any): Promise<any> {
    // if (updateAmendmentSetDto.amendmentType) {
    //   const [amendment] = await this.amendmentSetModel.aggregate(
    //     findAmendmentSet(new Types.ObjectId(id)),
    //   );

    //   amendment.approved = updateAmendmentSetDto.approved;

    //   // if (updateAmendmentSetDto.amendmentType === 'modify_run') {

    //   // }
    // }

    return this.amendmentSetModel
      .findByIdAndUpdate(id, updateAmendmentSetDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.amendmentSetModel.findById(id).deleteOne();
  }
}
