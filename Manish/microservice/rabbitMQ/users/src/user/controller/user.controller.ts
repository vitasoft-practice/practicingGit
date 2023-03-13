import { UserService } from './../db/user.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto, UserLoginDto, UserUpdateInfo } from './user.dto';
import { AuthGuard } from 'src/guards/auth.guard';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @MessagePattern({ role: 'user', cmd: 'create' })
  create(userDto: any) {
    return this.userService.create(userDto);
  }


  @MessagePattern({ role: 'user', cmd: 'login' })
  login(userLoginDto: UserLoginDto) {
    return this.userService.login(userLoginDto);
  }

  @MessagePattern({ role: 'user', cmd: 'get-by-id' })
  async getById(userId: string) {
    return this.userService.getById(userId);
  }

  @MessagePattern({ role: 'user', cmd: 'update-user-info' })

  async updateUserInfo(dto: any) {
    console.log('user updated ====>', dto.user)
    return this.userService.updateUserInfo(dto.userId, dto.user);
  }
}
