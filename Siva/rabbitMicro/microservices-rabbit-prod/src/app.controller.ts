import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
// import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto, SignupDto } from './app.dto';
import { AppService } from './app.service';
import { DataT } from './app.entity';
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(
    // private appService: AppService,
    @Inject('TEST_SERVICE') private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get('/create')
  create() {
    return this.client.send({ role: 'test', cmd: 'create' }, 'datarabbitmq');
  }
  @Get('/get')
  get() {
    return this.client.send({ cmd: 'get' }, 'datarabbitmq');
  }
  @Post('/update')
  update(@Body() testd: DataT) {
    return this.client.send({ cmd: 'update' }, testd);
  }
  @Post('/login')
  loginPhlebotomist(@Body() loginDto: LoginDto) {
    return this.client.send({ cmd: 'login' }, loginDto);
  }

  @Post('/signup')
  signupPhlebotomist(@Body() signupDto: SignupDto) {
    return this.client.send({ cmd: 'signup' }, signupDto);
  }

  @Delete('/delete/:name')
  deletePhlebotomist(@Param('name') name: string) {
    return this.client.send({ cmd: 'delete' }, name);
  }
}
