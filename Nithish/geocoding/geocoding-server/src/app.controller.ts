import { Controller } from '@nestjs/common';
import { GeoCodeService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class GeoCodeController {
  constructor(private readonly appService: GeoCodeService) {}

  @GrpcMethod('GeoCodeController', 'GetPlace')
  async getPlace(data: { postcode: string }) {
    const output = await this.appService.getHello(data.postcode);
    return output;
  }
}
