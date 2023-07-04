import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { studentDto } from './app.dto';
const data = [];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern('a')
  create(@Payload() message: studentDto) {
    console.log('logged from cons1', message);
    return this.appService.getCons(message);
    // return message;
  }
  @MessagePattern('find')
  find(message: studentDto) {
    console.log('logged from cons1', message);
    return this.appService.findElem(message);
    // return message;
  }
  @MessagePattern('delete')
  delete(message) {
    console.log('deleted  from db', message);
    return this.appService.delete(message);
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
