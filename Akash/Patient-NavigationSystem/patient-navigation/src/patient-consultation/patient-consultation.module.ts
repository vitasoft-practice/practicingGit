import { HttpModule, Module } from '@nestjs/common';
import { PatientConsultationService } from './patient-consultation.service';
import { PatientConsultationController } from './patient-consultation.controller';

@Module({
  imports: [HttpModule],
  controllers: [PatientConsultationController],
  providers: [PatientConsultationService]
})
export class PatientConsultationModule {}
