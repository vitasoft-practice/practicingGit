import { Controller, Get, Param, Query } from '@nestjs/common';
import { patientConsultationParameterDto } from './dto/patient-consultation-parameters.dto';
import { PatientConsultationService } from './patient-consultation.service';

@Controller('patient-consultation')
export class PatientConsultationController {
  constructor(
    private readonly patientConsultationService: PatientConsultationService,
  ) {}

  @Get('/:sampleId/:customerId')
  anyname(
    @Param('sampleId') sampleId: number,
    @Param('customerId') customerId: number,
  ) {
    return this.patientConsultationService.findAll(sampleId, customerId);
  }
}
