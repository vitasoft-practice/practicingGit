import { ClientProxy } from '@nestjs/microservices/client';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { LoginDto, SignupDto } from './phlebotomist.dto';

@Controller('phlebotomist')
export class PhlebotomistController {
  constructor(
    @Inject('PHLEBOTOMY_SERVICE') private readonly phlebotomyDb: ClientProxy,
  ) {}

  @Post('login')
  loginPhlebotomist(@Body() loginDto: LoginDto) {
    return this.phlebotomyDb.send({ cmd: 'login' }, loginDto);
  }

  @Post('signup')
  signupPhlebotomist(@Body() signupDto: SignupDto) {
    return this.phlebotomyDb.send({ cmd: 'signup' }, signupDto);
  }

  @Get('delete/:username')
  deletePhlebotomist(@Param('username') username: string) {
    return this.phlebotomyDb.send({ cmd: 'delete' }, username);
  }
}
