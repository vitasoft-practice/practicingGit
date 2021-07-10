import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserDetail } from './entities/user-detail.entity';

@Injectable()
export class UserDetailsService {
  constructor(
    @InjectRepository(UserDetail)
    private userDetailRepository: Repository<UserDetail>,
  ) {}
  create(createUserDetailDto: CreateUserDetailDto) {
    return this.userDetailRepository.create(createUserDetailDto);
  }

  findAll(): Promise<UserDetail[]> {
    return this.userDetailRepository.find();
  }

  findOne(id: number) {
    return this.userDetailRepository.findOne(id);
  }

  // update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
  //   return `This action updates a #${id} userDetail`;
  // }

  remove(id: number) {
    return this.userDetailRepository.delete(id);
  }
}
