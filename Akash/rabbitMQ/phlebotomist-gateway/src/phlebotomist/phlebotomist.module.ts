import { ClientsModule, Transport } from '@nestjs/microservices';
import { PhlebotomistController } from './phlebotomist.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PHLEBOTOMY_SERVICE',
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
    ]),
  ],
  controllers: [PhlebotomistController],
  providers: [],
})
export class PhlebotomistModule {}
