import { UserService } from './../db/user.service';
import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


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

  @MessagePattern({ role: 'user', cmd: 'get-by-id' })
  async getById(userId: string) {
    return this.userService.getById(userId);
  }
  // @Get('/:val')
  // getHello2(@Param('val') val: string) {
  //     return this.userService.getHello2(val);
  // }
}
