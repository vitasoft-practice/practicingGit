import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { patientConsultationParameterDto } from './dto/patient-consultation-parameters.dto';
import { PatientConsultationService } from './patient-consultation.service';

@Controller('patient-consultation')
export class PatientConsultationController {
  constructor(
    private readonly patientConsultationService: PatientConsultationService,
  ) {}

  @Get()
  anyname(@Param() params : patientConsultationParameterDto ) {
    console.log(1);
    return this.patientConsultationService.findAll(params.sampleId,params.customerId);
  }
}
