import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {BooksSchema} from './entities/book.entity'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Books', schema : BooksSchema}])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
