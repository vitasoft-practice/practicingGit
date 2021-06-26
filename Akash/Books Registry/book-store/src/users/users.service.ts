import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel('Users') private UsersModel : Model<UserDocument>){}
  async create(createUserDto: CreateUserDto) {
    return await this.UsersModel.create(createUserDto)
  }

  async findAll(): Promise<User[]> {
    return await this.UsersModel.find()
  }

  async findOne(id: string): Promise<User> {
    return await this.UsersModel.findById(id)
  }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
