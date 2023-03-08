import { UserSchema } from './db/user.schema';
import { UserService } from './db/user.service';
import { UserController } from './controller/user.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672/'],
          queue: 'auth-message',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'user',
        collection: 'user-collection',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UsergModule { }
