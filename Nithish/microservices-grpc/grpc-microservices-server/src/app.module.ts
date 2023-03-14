import { Module } from '@nestjs/common';
import { MovieServiceController } from './app.controller';
import { MovieService } from './app.service';

@Module({
  imports: [],
  controllers: [MovieServiceController],
  providers: [MovieService],
})
export class AppModule {}
