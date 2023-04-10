import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'geocode',
      protoPath: join(__dirname, '../src/geocode.proto'),
    },
  });
  await app.listen().then(() => {
    console.log('Microservice is listening...');
  });
}
bootstrap();
