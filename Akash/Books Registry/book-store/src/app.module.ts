import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/Book-store')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
