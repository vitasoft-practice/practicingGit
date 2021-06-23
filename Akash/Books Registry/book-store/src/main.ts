import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Book-Store')
  .setDescription('list of books available')
  .addTag('Books Registry')
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/apiDocs',app,document)


  await app.listen(3000);
}
bootstrap();
