import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author, AuthorDocument } from './entities/author.entity';

@Injectable()
export class AuthorService {

  constructor(@InjectModel('Authors') private AuthorsModel : Model<AuthorDocument>){}
  
  async create(createAuthorDto: CreateAuthorDto) {
    return await this.AuthorsModel.create(createAuthorDto)
  }

  async findAll(): Promise<Author[]> {
    return await this.AuthorsModel.find()
  }

  async findOne(id: string):Promise<Author> {
    return await  this.AuthorsModel.findById(id)
  }

  
}
