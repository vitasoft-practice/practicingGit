import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name:'Registry', schema: UserSchema }])], 
  controllers: [UsersController],
  providers: [UsersService,AuthService],
  exports: [UsersService]
})
export class UsersModule {}
