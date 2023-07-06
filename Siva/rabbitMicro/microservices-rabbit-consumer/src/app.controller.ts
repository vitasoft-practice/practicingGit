import { Delete } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto, SignupDto } from './dto/app.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataT } from './app.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,
    @InjectRepository(DataT)
    private repo: Repository<DataT>,
  ) {}

  @MessagePattern({ role: 'test', cmd: 'create' })
  create(test) {
    console.log('test receive', test);
    return test + ' ' + 'tested';
  }
  @MessagePattern({ cmd: 'signup' })
  signup(@Payload() signupDto: SignupDto) {
    return `added new user ${signupDto.username}`;
  }

  @MessagePattern({ cmd: 'login' })
  findOne(loginDto: LoginDto) {
    console.log(loginDto);
    return ` ${loginDto.username} login success`;
  }
  @MessagePattern({ cmd: 'get' })
  get(data) {
    console.log(data);
    return this.repo.find({});
    // return 'new user' + data;
  }
  @MessagePattern({ cmd: 'update' })
  async update(data) {
    console.log(data);
    try {
      await this.repo.insert(data);
    } catch (e) {
      return 'error occured';
    }
    return 'data inserted';
  }
  @MessagePattern({ cmd: 'delete' })
  async remove(data) {
    console.log(data);
    // try {
      // this.repo.
      const arr1=await this.repo.find({})
      console.log( 'delete ==>', arr1.filter(ccc=> ccc.name !== data ))
    try{
        await this.repo.delete({ name: data });
    } catch (e) {
        return 'error in delete';
    }
    return 'data deleted';
  }
}
