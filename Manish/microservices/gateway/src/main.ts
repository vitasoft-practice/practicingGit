import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const url = process.env.RabbitMQ_LOCAL_URL;
  const q = `${process.env.USER_QUEUE}`;
  console.log('url=====>', url);
  console.log(url, q);
  await app.listen(4000);
}
bootstrap();
