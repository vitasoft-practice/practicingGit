import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';

import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [AnimalsModule ,MongooseModule.forRoot('mongodb://127.0.0.1:27017/Animals')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
