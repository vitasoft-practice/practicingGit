import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectModel('Registry') private userModel: Model<UserDocument>,
  ) {}
  private logger = new Logger()

  async create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('hello im here')
    return new this.userModel(createUserDto).save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ id }, updateUserDto);
  }

  remove(id: string) {
    const data = this.userModel.deleteOne({ id });
    return `User is deleted`;
  }
}
