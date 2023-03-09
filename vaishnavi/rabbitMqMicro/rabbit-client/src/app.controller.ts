/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, Post, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { Userdto } from './user.dto';
@Controller()
export class AppController {
  constructor(
    // private appService: AppService,
    @Inject('BUNNY_SERVICE') private readonly client: ClientProxy,
  ) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  create() {
    return this.client.send(
      { role: 'test', cmd: 'create' },
      '<<===  this is the value im passing ===>> ',
    );
  }

  @Post()
  AddUser(@Body() userDto: Userdto) {
    console.log('create data:', userDto);
    return this.client.send('addUser', userDto);
  }

  @Patch()
  updateUserAddress(@Body() userDto: Userdto) {
    console.log('edit data:', userDto);
    return this.client.send('updateUser', userDto);
  }
}
