import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginService } from './login.service';
import { LoginDto, SignupDto } from './dto/login.dto';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @MessagePattern({ cmd: 'signup' })
  signup(@Payload() signupDto: SignupDto) {
    return this.loginService.create(signupDto);
  }

  @MessagePattern({ cmd: 'login' })
  findOne(loginDto: LoginDto) {
    console.log(loginDto);
    return this.loginService.findOne(loginDto);
  }

  @MessagePattern({ cmd: 'delete' })
  remove(@Payload() username: string) {
    return this.loginService.remove(username);
  }
}
