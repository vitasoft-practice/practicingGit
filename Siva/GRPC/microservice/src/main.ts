import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
// import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'movie',
        protoPath: 'src/_proto/sample.proto',
      },
    },
  );
  app.listen().then(() => {
    console.log('Microservice is running');
  });
  // await app.listen(3000);
}
bootstrap();
