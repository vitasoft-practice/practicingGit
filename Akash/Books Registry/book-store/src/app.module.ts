import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/Book-store'), UsersModule]
})
export class AppModule {}
