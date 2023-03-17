import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
    });

    const config = new DocumentBuilder()
        .setTitle("Microservices Testing")
        .setDescription("API Gateway")
        .setVersion("0.0.1")
        .addTag("Microservices")
        .addBearerAuth(
            {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                name: "JWT",
                description: "Enter jwt Token",
                in: "header",
            },
            "jwt-auth"
        )
        .build();
    const document = SwaggerModule.createDocument(app, config);
    const swaggerUrlPath = "microservices";
    SwaggerModule.setup(swaggerUrlPath, app, document);

    await app.listen(4000);
}
bootstrap();
