import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'hero',
  //       protoPath: join(__dirname, 'hero/hero.proto'),
  //     },
  //   },
  // );
  await app.listen(3000);
}
bootstrap();
