import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientConsultationService } from './patient-consultation.service';
import { CreatePatientConsultationDto } from './dto/create-patient-consultation.dto';

@Controller('patient-consultation')
export class PatientConsultationController {
  constructor(private readonly patientConsultationService: PatientConsultationService) {}

  

  @Get()
  findAll() {
    return this.patientConsultationService.findAll();
  }

  
}
