import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
<<<<<<< HEAD
=======
import { AuthModule } from 'src/auth/auth.module';
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498

@Module({
  imports:[MongooseModule.forFeature([{name:'Registry', schema: UserSchema }])], 
  controllers: [UsersController],
<<<<<<< HEAD
  providers: [UsersService,AuthService],
=======
  providers: [UsersService],
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
  exports: [UsersService]
})
export class UsersModule {}
