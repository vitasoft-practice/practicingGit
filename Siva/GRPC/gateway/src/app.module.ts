import { Module } from '@nestjs/common';
import { MovieServiceController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'HERO_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: {
    //       package: 'hero',
    //       protoPath: join(__dirname, 'src/_proto/hello.proto'),
    //     },
    //   },
    // ]),
  ],
  controllers: [MovieServiceController],
  providers: [AppService],
})
export class AppModule {}
