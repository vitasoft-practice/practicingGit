import { User } from './user.schema';

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';
import { UserLoginDto } from '../controller/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private userModel: Model<User>,
    @Inject("AUTH_SERVICE")
    private authService: ClientProxy,
  ) {
    this.authService.connect();
  }
  getHello(): string {
    return 'Hello World!2345546';
  }

  create(userDto: any) {
    console.log('userDto====>', userDto);
    const user = new this.userModel(userDto);
    return user.save();
  }

  async login(userLoginDto: UserLoginDto) {
    console.log('userLoginDto====>', userLoginDto);
    const user = await this.userModel.findOne({
      username: userLoginDto.username
    });
    if (!user) {
      console.log('not found====>');
      throw new NotFoundException();
    }

    const testToken = await firstValueFrom(this.authService.send({ role: 'auth', cmd: 'sign' }, userLoginDto));
    console.log("from 2nd microservicess===>token", testToken);
    return {
      token: testToken
    };
    //return user;

  }
  async getById(userId: string) {
    const test = await firstValueFrom(this.authService.send("test-second-microservices", "manish"));
    console.log("from 2nd microservicess===>", test);

    return this.userModel.find({
      userId: userId,
    });
  }
}

