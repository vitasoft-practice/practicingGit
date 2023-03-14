import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microServiceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'movie',
    protoPath: join(__dirname, '../src/movie.proto'),
  },
};
