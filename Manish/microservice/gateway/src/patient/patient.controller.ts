import {
    AddressDto,
    PatientDto,
    PatientVerifyDto,
    VerifyDto,
} from "./patient.dto";
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { PatientsService } from "./patient.service";
import { ApiTags } from "@nestjs/swagger";
import { Address, PatientInfo, PatientVerify } from "src/proto/build/patient";

@ApiTags("patient-grpc-service")
@Controller("patient")
export class PatientController {
    constructor(private patientService: PatientsService) { }

    // @Post("/info")
    // savePatientInfo(@Body() patient: PatientVerifyDto) {
    //     return this.patientService.savePatientInfo(patient);
    // }
    // @Post("/verify")
    // verifyDetails(@Body() info: PatientVerify) {
    //     return this.patientService.verifyDetails(info);
    // }
    @Post("/save")
    savePatient(@Body() info: PatientDto) {
        return this.patientService.savePatient(info);
    }
    @Post("/verify/:patientId")
    verifyPatient(
        @Param("patientId") patientId: string,
        @Body() info: VerifyDto
    ) {
        return this.patientService.verifyPatient(patientId, info);
    }
    @Get("/get/:patientId")
    getPatient(@Param("patientId") patientId: string) {
        return this.patientService.getPatient({ patientId });
    }
    @Put("/update-address/:patientId")
    updateAddress(
        @Param("patientId") patientId: string,
        @Body() address: AddressDto
    ) {
        return this.patientService.updateAddress(patientId, address);
    }
}
