/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      // {
      //   name: 'TEST',
      //   transport: Transport.GRPC,
      //   options: {
      //     package: 'student',
      //     protoPath: join(__dirname, '../src/proto/student.proto'),
      //   },
      // },
      {
        name: 'TEST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@192.168.0.104:5672/'],
          queue: 'testque',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
