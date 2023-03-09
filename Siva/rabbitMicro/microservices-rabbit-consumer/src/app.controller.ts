import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'test', cmd: 'create' })
  create(test) {
    console.log('test receive', test);
    return test + ' ' + 'tested';
  }
  @MessagePattern({ cmd: 'update' })
  update(data) {
    return 'new user' + data;
  }
}
