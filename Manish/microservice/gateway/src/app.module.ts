import { UserModule } from "./user/user.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { PatientModule } from "./patient/patient.module";

@Module({
    imports: [ConfigModule.forRoot(), UserModule, PatientModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
