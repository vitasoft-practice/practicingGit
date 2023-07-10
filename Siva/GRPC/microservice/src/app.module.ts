import { Module } from '@nestjs/common';
import { MovieServiceController } from './app.controller';
import { MovieService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  controllers: [MovieServiceController],
  providers: [MovieService],
})
export class AppModule {}
