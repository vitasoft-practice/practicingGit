import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'test', cmd: 'create' })
  create(testDto) {
    console.log('hiii', testDto);
    return testDto + 'checkedd';
  }
}
