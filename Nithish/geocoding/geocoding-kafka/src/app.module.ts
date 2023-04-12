import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Producer } from './producer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchSchema } from './schema/search.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/geocode-logs'),
    MongooseModule.forFeature([
      {
        name: 'geocode',
        collection: 'log',
        schema: SearchSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [Producer],
})
export class AppModule {}
