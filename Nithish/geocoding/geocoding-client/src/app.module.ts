import { Module } from '@nestjs/common';
import { GeoCodeController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [GeoCodeController],
  providers: [AppService],
})
export class AppModule {}
