import { Module } from '@nestjs/common';
import { CarServiceController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CarServiceController],
  providers: [AppService],
})
export class AppModule {}
