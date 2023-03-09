import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://rgrawgmi:Y7owuGJTSc8G2CaZN8_dAIxif9f2cSa6@rattlesnake.rmq.cloudamqp.com/rgrawgmi',
        ],
        queue: 'phlebotomist_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
