/* eslint-disable prettier/prettier */
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microServiceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'car',
    protoPath: join(__dirname, '../src/cars.proto'),
  },
};
