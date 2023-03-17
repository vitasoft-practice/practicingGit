import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc, Transport } from "@nestjs/microservices";
import { join } from "path";
import { patientClientOption } from "./patient.client";
import { PatientService } from "src/proto/build/patient";
import { lastValueFrom } from "rxjs";
import { VerifyDto } from "./patient.dto";

@Injectable()
export class PatientsService implements OnModuleInit {
    // constructor(@Inject('PATIENT_PACKAGE') private client: ClientGrpc) { }

    @Client(patientClientOption)
    client: ClientGrpc;
    private patientService: PatientService;

    onModuleInit() {
        this.patientService =
            this.client.getService<PatientService>("PatientService");
    }

    // async savePatientInfo(patient: any) {
    //     console.log("patient12345=======>", patient);
    //     const data = await lastValueFrom(
    //         this.patientService.savePatientInfo(patient)
    //     );
    //     console.log("data====>", data);
    //     return this.patientService.savePatientInfo(patient);
    // }
    // async verifyDetails(info: any) {
    //     console.log("patient12345=======>", info);
    //     return this.patientService.verifyDetial(info);
    // }
    async savePatient(info: any) {
        return this.patientService.savePatient(info);
    }
    async getPatient(patientId: any) {
        return this.patientService.getPatient(patientId);
    }
    async verifyPatient(patientId: string, info: VerifyDto) {
        const data = await lastValueFrom(
            this.patientService.verifyPatient({ patientId, info })
        );
        console.log("data===>", data);
        return this.patientService.verifyPatient({ patientId, info });
    }
    async updateAddress(patientId: any, address: any) {
        return this.patientService.updateAdress({ patientId, address });
    }
}
