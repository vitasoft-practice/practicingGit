/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto, SignupDto } from './dto/app.dto';

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
  @MessagePattern({ cmd: 'signup' })
  signup(@Payload() signupDto: SignupDto) {
    return `added new user ${signupDto.username}`;
  }

  @MessagePattern({ cmd: 'login' })
  findOne(loginDto: LoginDto) {
    console.log(loginDto);
    return ` ${loginDto.username} login success`;
  }

  @MessagePattern({ cmd: 'delete' })
  remove(@Payload() username: string) {
    return `removed user ${username}`;
  }
}
