import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { student } from './app.schema';
import { Model } from 'mongoose';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('testing')
    private apimodel: Model<student>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  getCons(message) {
    return message;
  }
  async findElem(message) {
    await this.apimodel.create(message);
    return this.apimodel.find({});
  }
  async delete(message) {
    // if (message == 'vcc') {
    return this.apimodel.deleteMany(message);
    // }
    // return this.apimodel.find({});
  }
}
