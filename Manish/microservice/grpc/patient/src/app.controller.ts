import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PatientInfo } from './build/patient';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @GrpcMethod('PatientService', 'SavePatientInfo')
  async SavePatientInfo(
    data: PatientInfo,
    metadata: any,
  ): Promise<PatientInfo> {
    console.log(data, metadata);
    return data;
  }
}
