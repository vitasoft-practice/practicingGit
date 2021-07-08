import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PatientConsultationModule } from './patient-consultation/patient-consultation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PatientConsultationModule,
  ],
})
export class AppModule {}
