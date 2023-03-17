import { Observable } from 'rxjs';

import { InjectModel } from '@nestjs/mongoose';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Info,
  PatientInfo,
  PatientVerify,
  GetRequest,
  UpdateAddress,
  PatientVerification,
} from './build/patient';
import { GrpcMethod } from '@nestjs/microservices';
import { Patientp } from './schema/patient.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel('patient')
    private patientModel: Model<Patientp>,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @GrpcMethod('PatientService', 'SavePatientInfo')
  async savePatientInfo(
    data: PatientInfo,
    metadata: any,
  ): Promise<PatientInfo> {
    console.log('patient12345=======>', data);
    console.log(data, metadata);
    return data;
  }
  @GrpcMethod('PatientService', 'VerifyDetail')
  async verifyDetial(
    data: PatientVerify,
    metadata: any,
  ): Promise<PatientVerify> {
    console.log(data, metadata);
    return data;
  }
  @GrpcMethod('PatientService', 'SavePatient')
  async savePatient(data: Info, metadata: any): Promise<Info> {
    console.log(data, metadata);
    //  return data;
    const mod = new this.patientModel(data);
    return mod.save();
  }
  @GrpcMethod('PatientService', 'GetPatient')
  async getPatient(data: GetRequest, metadata: any): Promise<Info> {
    console.log(data, metadata);
    //  return data;
    const res = this.patientModel.findOne({
      patientId: data.patientId,
    });
    if (!res) {
      console.log('Not Found 404 Error');
      throw new NotFoundException();
    }
    return res;
  }

  @GrpcMethod('PatientService', 'VerifyPatient')
  async verifyPatient(data: PatientVerification, metadata: any) {
    console.log(data, metadata);
    console.log('patient Name', data.info.firstName);
    console.log('patient Id', data.patientId);
    const res = this.patientModel.findOne({
      patientId: data.patientId,
      firstName: data.info.firstName,
      lastName: data.info.lastName,
      dob: data.info.dob,
    });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  @GrpcMethod('PatientService', 'UpdateAdress')
  async updateAdresst(data: UpdateAddress, metadata: any): Promise<Info> {
    console.log(data, metadata);
    //  return data;
    const res = this.patientModel.findOneAndUpdate(
      {
        patientId: data.patientId,
      },
      {
        address: data.address,
      },
      {
        new: true,
      },
    );
    if (!res) {
      console.log('Not Found 404 Error');
      throw new NotFoundException();
    }
    return res;
  }
}
