import { Injectable } from '@nestjs/common';
import { SignupDto, LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  create(signupDto: SignupDto) {
    return `This action adds a new login for ${signupDto.username}`;
  }

  findOne(loginDto: LoginDto) {
    console.log(loginDto);
    return `This action returns a #${loginDto.username} login details`;
  }

  remove(username: string) {
    return `This action removes a username=> ${username} from login`;
  }
}
