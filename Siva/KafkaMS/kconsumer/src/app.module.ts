import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppSchema } from './app.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://192.168.0.104/test`),
    MongooseModule.forFeature([
      {
        name: 'testing',
        collection: 'test',
        schema: AppSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
