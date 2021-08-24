import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; 

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);

    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const data = { name: user.name, id: user.id };

    return {
      access_token: this.jwtService.sign(data),
    };
  }
}
