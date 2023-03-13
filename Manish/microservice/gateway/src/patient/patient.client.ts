import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const patientClientOption: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'patient',
        protoPath: join(__dirname, '_proto/patient.proto'),
    }
}
