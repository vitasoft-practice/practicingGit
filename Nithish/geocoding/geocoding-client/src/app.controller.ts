import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientGrpc, ClientKafka } from '@nestjs/microservices';
import { kafkaOptions, microServiceOptions } from './geocode.options';
import { lastValueFrom } from 'rxjs';
import { GeoCodeControllerService } from './geocode.interface';

@Controller('geocode')
export class GeoCodeController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  @Client(microServiceOptions) private readonly client: ClientGrpc;
  @Client(kafkaOptions) private readonly kafkaClient: ClientKafka;

  private geocodeservice: GeoCodeControllerService;

  async onModuleInit() {
    this.geocodeservice = this.client.getService('GeoCodeController');
    this.kafkaClient.subscribeToResponseOf('geocode');
    this.kafkaClient.subscribeToResponseOf('find');
    await this.kafkaClient.connect();
  }

  @Get()
  getHello(): string {
    console.log('testing...');
    return this.appService.getHello();
  }

  @Get('/:postcode')
  async getPlace(@Param('postcode') postcode: string) {
    const test = await lastValueFrom(
      this.geocodeservice.getPlace({ postcode }),
    );
    const stat = {
      zipcode: postcode,
      status: test !== undefined ? 'success' : 'failed',
      timestamp: Date.now(),
    };
    const kafkaresult = await lastValueFrom(
      this.kafkaClient.send('geocode', stat),
    );
    console.log(test);
    console.log('Kafkaresult:', kafkaresult);
    return test;
  }

  @Get('/find/:id')
  async getSearchStatus(@Param('id') id: string) {
    const idnumber = id;
    console.log('in client', idnumber);
    return this.kafkaClient.send('find', idnumber);
  }
}
