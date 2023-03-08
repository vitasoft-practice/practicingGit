import { UsergModule } from './user/user.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/user-db'), UsergModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
