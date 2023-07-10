/* eslint-disable prettier/prettier */
import { Controller, NotFoundException } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  RpcException,
} from '@nestjs/microservices';
import { LoginDto, SignupDto } from './dto/app.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Data2 } from './app.entity';
import { Repository } from 'typeorm';

interface movie {
  name: string;
  rating: number;
  review: string;
}
interface moviesI {
  movies: movie[];
}
@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,
    // @InjectRepository(DataT)
    // private repo: Repository<DataT>,
    @InjectRepository(Data2)
    private repo1: Repository<Data2>,
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
    return this.repo1.find({});
    // return 'new user' + data;
  }
  @MessagePattern({ cmd: 'update' })
  async update(data) {
    console.log(data);
    try {
      await this.repo1.insert(data);
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
    const arr1 = await this.repo1.find({});
    console.log(
      'delete ==>',
      arr1.filter((ccc) => ccc.name !== data),
    );
    try {
      await this.repo1.delete({ name: data });
    } catch (e) {
      return 'error in delete';
    }
    return 'data deleted';
  }
  @MessagePattern({ cmd: 'sendMovie' })
  async getFromMS(@Payload() data: moviesI, ) {
    console.log('added in DB', data);
    console.log('---------->', data.movies);
    const datas = await this.repo1.findOneBy({ name: 'guiguy9978877877' });
    if (!datas) {
      console.log('condition');
      throw new RpcException(new NotFoundException('Product was not found!'));
    }
    await this.repo1.save(data.movies);
    return 'data received';
  }
}
