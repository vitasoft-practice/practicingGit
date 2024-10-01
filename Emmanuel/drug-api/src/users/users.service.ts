import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
      constructor(@InjectModel(User.name) private userModel: Model<User>) { }

      async createUser(username: string, password: string): Promise<User> {
            return this.userModel.create({
                  username,
                  password,
                  bookmarks : ";"
            });
      }
      async getUser(query: object): Promise<User> {
            return this.userModel.findOne(query);
      }

      async findOne(username: string): Promise<User | undefined> {
            return this.userModel.findOne({ username });
      }

      async updateUser(userName: string, updateUserDto: UpdateUserDto): Promise<User> {
            const existingUser = await        this.userModel.findOneAndUpdate({ username: userName }, updateUserDto, { new: true });
           if (!existingUser) {
             throw new NotFoundException(`User #${userName} not found`);
           }
           return existingUser;
          }

      async deleteUser(username: string): Promise<User> {
            const deletedUser = await this.userModel.findOneAndDelete({ username: username });
           if (!deletedUser) {
             throw new NotFoundException(`User #${username} not found`);
           }
           return deletedUser;
         }
}