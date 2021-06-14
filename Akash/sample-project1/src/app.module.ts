import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';

import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [AnimalsModule ,MongooseModule.forRoot('mongodb+srv://akash:akash@cluster0.cylwt.mongodb.net/Animals-Database?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
