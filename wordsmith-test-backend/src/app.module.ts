import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AmendmentModule } from './amendment/amendment.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://testUser:!Welcome!@cluster0.e01vuzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    AmendmentModule,
  ],
})
export class AppModule {}
