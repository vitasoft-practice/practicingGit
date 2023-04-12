import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('a')
  create(@Payload() message) {
    console.log('hiii', message);
    return message;
  }

  @MessagePattern('b')
  create2(@Payload() message) {
    console.log('b', message);
    return message;
  }
}
