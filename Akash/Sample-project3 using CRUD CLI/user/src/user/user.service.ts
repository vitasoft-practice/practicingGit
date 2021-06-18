import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository){}
  
  async create(createUserDto: CreateUserDto):Promise<User> {
    return this.userRepository.create({
      id: Date.now(),
      name : createUserDto.name,
    })
  }

  async findAll(name?: string):Promise<User[]> {

    
    return this.userRepository.find({})
  }

  async findOne(id: number):Promise<User> {
    return this.userRepository.findOne({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    
    return this.userRepository.update({id},updateUserDto);
  }

  async remove(id: number): Promise<boolean> {
    return this.userRepository.delete({id});
  }
}
