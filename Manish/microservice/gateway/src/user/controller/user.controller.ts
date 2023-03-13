
import { Controller, Inject, Get, Post, Body, Param, UseGuards, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto, UserLoginDto, UserUpdateInfo } from './user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
//import { UserId } from 'src/decorators/user-token.decorator';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) { }
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Post()
  async create(@Body() user: UserDto) {
    return this.client.send({ role: 'user', cmd: 'create' }, user);
  }

  @Post('/login')
  async login(@Body() user: UserLoginDto) {
    return this.client.send({ role: 'user', cmd: 'login' }, user);
  }
  @ApiBearerAuth('jwt-auth')
  @UseGuards(AuthGuard)
  @Get('test-auth')
  async testAuth(): Promise<string> {
    return 'Authenticated user';
  }

  @ApiBearerAuth('jwt-auth')
  @UseGuards(AuthGuard)
  @Get('/:userId')
  async getById(@Param('userId') userId: string) {
    return this.client.send({ role: 'user', cmd: 'get-by-id' }, userId);
  }

  @ApiBearerAuth('jwt-auth')
  @UseGuards(AuthGuard)
  @Put('/update-userInfo/:userId')
  async updateUserDetails(@Param('userId') userId: string,
    @Body() user: UserUpdateInfo) {
    const dto = {
      userId: userId,
      user: user
    }
    console.log('userId----->', userId);
    return this.client.send({ role: 'user', cmd: 'update-user-info' }, dto);
  }

}
