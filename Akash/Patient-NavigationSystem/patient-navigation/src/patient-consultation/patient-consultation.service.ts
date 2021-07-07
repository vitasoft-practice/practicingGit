import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CreatePatientConsultationDto } from './dto/create-patient-consultation.dto';

@Injectable()
export class PatientConsultationService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService.get('').pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}

