import { Module } from '@nestjs/common';
import { MovieServiceController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [MovieServiceController],
  providers: [AppService],
})
export class AppModule {}
