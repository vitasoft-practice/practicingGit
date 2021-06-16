import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MongooseModule } from '@nestjs/mongoose'
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [AnimalsModule ,MongooseModule.forRoot('mongodb://127.0.0.1:27017/Animals')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
