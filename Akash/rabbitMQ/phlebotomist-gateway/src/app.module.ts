import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhlebotomistModule } from './phlebotomist/phlebotomist.module';

@Module({
  imports: [PhlebotomistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
