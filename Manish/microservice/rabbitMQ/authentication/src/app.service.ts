import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(val: string) {
    return `Hello ${val}`;
  }
}
