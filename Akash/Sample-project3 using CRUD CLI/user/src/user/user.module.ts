import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema : UserSchema}])],
  controllers: [
    UserController,
  ],
  providers: [UserService,UserRepository],
})
export class UserModule {}
