import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientsService } from './patient.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('patient-by-grpc')
@Controller('patient')
export class PatientController {
    constructor(
        private patientService: PatientsService
    ) { }

    @Post()
    savePatientInfo(@Body() patient: any) {
        return this.patientService.savePatientInfo(patient);
    }
    @Get()
    verifyDetails(@Body() info: any) {
        return this.patientService.verifyDetails(info);
    }

}