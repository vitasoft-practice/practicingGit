import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['192.168.0.112:39092'],
        },
        consumer: {
          groupId: 'hero-consumer',
        },
      },
    },
  );
  await app.listen();
  // await app.listen(3000);
}
bootstrap();
