import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import console from 'console';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { CreatePatientConsultationDto } from './dto/create-patient-consultation.dto';

@Injectable()
export class PatientConsultationService {
  constructor(private httpService: HttpService) {}

  // servlet name to be passed => getPatientPaymentInfo
  // param => sampelId and customer Id
  // add port and ip in env and use as ur local

  findAll(sampleId, customerId) {
    const port = process.env.PORT_NUMBER;
    const ip = process.env.IP_ADDRESS;
    const url = 'http://' + ip + ':' + port;
    return this.httpService.get(url + `/getPatientPaymentInfo/${sampleId}/${customerId}`).pipe(
      map((response) => {
        response.data;
      }),
    );
  }
}
// `/${sampleId}/${customerId}
