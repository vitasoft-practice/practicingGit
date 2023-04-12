import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices/client';

@Controller()
export class AppController {
  constructor(
    // private appService: AppService,
    @Inject('HERO_SERVICE') private readonly client: ClientKafka,
  ) {}

  async onApplicationBootstrap() {
    this.client.subscribeToResponseOf('a');
    this.client.subscribeToResponseOf('b');
    await this.client.connect();
  }

  @Get()
  create() {
    console.log('helooo');
    return this.client.send('a', '<<===  this is the value im passing ===>> ');
  }

  @Get('/b')
  create2() {
    console.log('helooo');
    return this.client.send('b', 'hayyaaaaa ');
  }
}
