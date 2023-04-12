import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microServiceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'geocode',
    protoPath: join(__dirname, '../src/geocode.proto'),
  },
};

export const kafkaOptions: ClientOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'geocode',
      brokers: ['192.168.0.112:39092'],
    },
    consumer: {
      groupId: 'geocode-consumer',
    },
  },
};
