import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from './entities/book.entity';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel('Books') private BooksModel: Model<BookDocument>
  ) {}

  async create(book) {
    return await this.BooksModel.create(book);
  }

  async findAll(query?): Promise<Book[]> { 
    return await this.BooksModel.find().populate('author').sort(String(query.sort)).limit(parseInt(query.limit));  
  }

  async findOne(id: string): Promise<Book> {
    return await this.BooksModel.findById(id).populate('author');
  }

  // async update(id: string, updatedBook):Promise<Book> {
  //   return await this.BooksModel.findByIdAndUpdate(id,updatedBook,{useFindAndModify: false,new: true})

  // }

  async remove(id: string): Promise<Book> {
    return await this.BooksModel.findByIdAndDelete(id,{useFindAndModify: false})

  }
}
