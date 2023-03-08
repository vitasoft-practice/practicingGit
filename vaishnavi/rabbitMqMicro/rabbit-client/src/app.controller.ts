/* eslint-disable prettier/prettier */
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
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
    return this.client.send({ role: 'test', cmd: 'create' }, '<<===  this is the value im passing ===>> ');
  }
}
