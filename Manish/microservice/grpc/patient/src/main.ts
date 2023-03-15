
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'patient',
      protoPath: join(__dirname, '_proto/patient.proto'),
    },
  });
  await app.listen();
}
bootstrap();
