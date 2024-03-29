/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, 
    // {
    //   // name: 'TEST',
    //   transport: Transport.GRPC,
    //   options: {
    //     package: 'student',
    //     protoPath: 'src/proto/student.proto',
    //   },
    // },
  // );
    {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@192.168.0.104:5672/'],
      queue: 'testque',
      queueOptions: {
        durable: true,
      },
    },
  }
  );
  await app.listen();
}
bootstrap();
