import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/models';
import * as bcrypt from 'bcrypt';
import { catchError, from, map, Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  constructor() { }
  @InjectModel(Users.name)
  private UsersDocumentModel: Model<UserDocument>;

  findAll(filters: {}): Promise<Users[]> {
    // return this.UsersDocumentModel.find(filters).skip(pagination.skip).limit(pagination.limit).collation({ locale: "en", strength: 2 });
    return this.UsersDocumentModel.find(filters).collation({ locale: "en", strength: 2 });
  }

  async create(payload: any): Promise<any> {
    let user: any;
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    payload.password = hashedPassword;
    user = await this.UsersDocumentModel.create(payload);
    return user;
  }

  async findOne(payload) {
    const data = await this.UsersDocumentModel.findOne(payload).collation({locale: 'en', strength: 2})
    return data;
  }

  async delete(id: any): Promise<any> {
    let user: any;
    user = await this.UsersDocumentModel.findByIdAndDelete(id);
    return user;
  }
}
