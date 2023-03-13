import { Module } from "@nestjs/common";
import { PatientController } from "./patient.controller";
import { PatientsService } from "./patient.service";


@Module({
    imports: [],
    controllers: [PatientController],
    providers: [PatientsService],
})
export class PatientModule { }
