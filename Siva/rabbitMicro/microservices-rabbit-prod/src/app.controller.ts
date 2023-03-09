import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(
    // private appService: AppService,
    @Inject('TEST_SERVICE') private readonly client: ClientProxy,
  ) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get('/create')
  create() {
    return this.client.send({ role: 'test', cmd: 'create' }, 'datarabbitmq');
  }
  @Post('/update')
  update() {
    return this.client.send({ cmd: 'update' }, 'sivakumar');
  }
}
