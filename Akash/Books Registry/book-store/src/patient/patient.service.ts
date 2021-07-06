import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new patient';
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
