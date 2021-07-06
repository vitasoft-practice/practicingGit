import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientConsultationModule } from './patient-consultation/patient-consultation.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),PatientConsultationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
