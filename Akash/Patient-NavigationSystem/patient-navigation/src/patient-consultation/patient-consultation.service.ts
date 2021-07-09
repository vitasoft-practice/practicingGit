import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import console from 'console';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CreatePatientConsultationDto } from './dto/create-patient-consultation.dto';

@Injectable()
export class PatientConsultationService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  // servlet name to be passed => getPatientPaymentInfo
  // param => sampelId and customer Id
  // add port and ip in env and use as ur local

  findAll(sampleId: number, customerId: number) {
    const url =
      'http://' +
      this.configService.get('IP_ADDRESS') +
      ':' +
      this.configService.get('PORT_NUMBER');

    return this.httpService
      .get(url + `/getPatientPaymentInfo?sampleId=${sampleId}&customerId=${customerId}`)
      .pipe(
        map((response) => {
          response.data;
        }),
      );
  }
}



// getPPatientData?sampleId=12 -> when u run in java 
// getPatientData/12 -> api