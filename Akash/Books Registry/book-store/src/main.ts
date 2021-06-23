import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const BaseConfiguration = new DocumentBuilder()
  .setTitle('Book-Store')
  .setDescription('list of books available')
  .build()

  const document = SwaggerModule.createDocument(app,BaseConfiguration)
  SwaggerModule.setup('/apiDocs',app,document)


  await app.listen(3000);
}
bootstrap();
