import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema : UsersSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
