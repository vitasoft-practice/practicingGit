import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc, Transport } from "@nestjs/microservices";
import { join } from "path";
import { patientClientOption } from "./patient.client";
import { PatientService } from "src/proto/build/patient";

@Injectable()
export class PatientsService implements OnModuleInit {
    // constructor(@Inject('PATIENT_PACKAGE') private client: ClientGrpc) { }

    @Client(patientClientOption)
    client: ClientGrpc;
    private patientService: PatientService;

    onModuleInit() {
        this.patientService = this.client.getService<PatientService>('PatientService');
    }

    async savePatientInfo(patient: any) {
        return this.patientService.SavePatientInfo(patient);
    }
    async verifyDetails(info: any) {
        return this.patientService.VerifyDetials(info);
    }


}