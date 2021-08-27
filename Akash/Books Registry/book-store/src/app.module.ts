import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/Book-store'), AuthorModule, PatientModule, AuthModule]
})
export class AppModule {}
