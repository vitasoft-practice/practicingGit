import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(@InjectModel('Books') private BooksModel : Model<BookDocument>){}

  
  async create(book): Promise<Book> {
    const data =new this.BooksModel(book)
    return data.save()
  }

  async findAll(): Promise<Book[]> {
    return this.BooksModel.find()
  }

  async findOne(id: string):Promise<Book> {
    return  this.BooksModel.findById(id)
  }

  async update(id: string, updatedBook):Promise<Book> {
    return this.BooksModel.findByIdAndUpdate(id,updatedBook,{useFindAndModify: false,new: true})
    
  }

  async remove(id: string): Promise<Book> {
    return this.BooksModel.findByIdAndDelete(id,{useFindAndModify: false,new: true})
    
  }
}
