import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/registry')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
