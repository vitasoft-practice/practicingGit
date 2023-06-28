import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('Kafka')
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  create(@Body() request) {
    console.log('logged Post');
    return this.appService.getKaf(request);
    // return this.client.emit('a', request);
  }
  @Get('/b')
  update() {
    console.log('logged Get');
    return this.appService.getKaf2();
  }
  @Post('/addCart')
  addCart(@Body() item) {
    console.log('add');
    return this.appService.addCart(item);
  }
  @Delete('/del')
  removeMovie() {
    // console.log('items to be removed:', item);
    return this.appService.removeCart();
  }
  @Get('/fire')
  fire() {
    const topic = 'a';
    const key = 'msg';
    const value = 'kafka trial message';

    try {
      return this.appService.getFire(topic, key, value);
    } catch (error) {
      console.error(
        'An error occurred while sending the Kafka message:',
        error,
      );
    }
  }
}
