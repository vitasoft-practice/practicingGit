
import { Controller, Inject, Get, Post, Body, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto, UserLoginDto } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) { }
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getHello() {
    return 'Hello Microservices';
  }

  @Post()
  async create(@Body() user: UserDto) {
    return this.client.send({ role: 'user', cmd: 'create' }, user);
  }

  @Post('/login')
  async login(@Body() user: UserLoginDto) {
    return this.client.send({ role: 'user', cmd: 'login' }, user);
    //return user;
  }

  @Get('/get/:userId')
  async getById(@Param('userId') userId: string) {
    return this.client.send({ role: 'user', cmd: 'get-by-id' }, userId);
  }
}
