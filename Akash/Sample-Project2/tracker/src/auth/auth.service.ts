import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { JwtService } from '@nestjs/jwt';
=======
import { JwtService} from '@nestjs/jwt'
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);

    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const data = { name: user.name, sub: user.id };

    return {
      access_token: this.jwtService.sign(data),
    };
  }
}
