import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

const data = [];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern('a')
  create(@Payload() message) {
    console.log('logged from cons1', message);
    return this.appService.getCons(message);
    // return message;
  }
  @MessagePattern('b')
  update(@Payload() message) {
    console.log('log from cons2', message);
    return message;
  }
  @MessagePattern('add_items')
  addCart(item) {
    data.push(item);
    console.log('added item', data);
    return data;
  }
  @MessagePattern('remove_items')
  async removeItems(item) {
    console.log('item', item, '-', item.name, data);
    console.log(data.filter((itemelement) => itemelement.name !== item.name));
    return data.filter((itemelement) => itemelement.name !== item.name);
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
