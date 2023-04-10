import { Module } from '@nestjs/common';
import { GeoCodeController } from './app.controller';
import { GeoCodeService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [GeoCodeController],
  providers: [GeoCodeService],
})
export class AppModule {}
