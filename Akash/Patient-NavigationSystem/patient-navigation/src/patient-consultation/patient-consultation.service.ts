import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { CreatePatientConsultationDto } from './dto/create-patient-consultation.dto';

@Injectable()
export class PatientConsultationService {

  constructor(private httpService: HttpService, private configService : ConfigService){}

  create(createPatientConsultationDto: CreatePatientConsultationDto) {
    return 'This action adds a new patientConsultation';
  }

  findAll():Observable<AxiosResponse<CreatePatientConsultationDto>> {
    return this.httpService.get(this.configService.get('ENV_SOURCELINK'));
  }

  findOne(id: number) {
    return `This action returns a #${id} patientConsultation`;
  }

}
