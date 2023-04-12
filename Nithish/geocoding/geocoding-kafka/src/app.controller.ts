import { Controller, NotFoundException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Search } from './search.interface';
import { Producer } from './producer.service';
import { InjectModel } from '@nestjs/mongoose';
import { SearchC } from './schema/search.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(
    private readonly producerservice: Producer,
    @InjectModel('geocode')
    private geocodeModel: Model<SearchC>,
  ) {}

  @MessagePattern('geocode')
  async handlelog(@Payload() data: Search) {
    const searchLog = new this.geocodeModel(data);
    return searchLog.save();
  }

  @MessagePattern('find')
  async findLog(zipcode: string) {
    console.log('inside server controllr', zipcode);
    const response = this.geocodeModel.find({
      zipcode: zipcode,
    });
    if (!response) {
      console.log('No zipcodes');
      throw new NotFoundException();
    }
    return response;
  }
}
