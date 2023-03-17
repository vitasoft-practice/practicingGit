import { microServiceOptions } from './cars.options';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientGrpc } from '@nestjs/microservices';

interface carDto {
  regId:string;
  name: string;
  brand: string;
}
@Controller()
export class CarServiceController {
  constructor(private readonly appService: AppService) {}
  @Client(microServiceOptions) private readonly carClient: ClientGrpc;
  private carService;
  onModuleInit() {
    this.carService = this.carClient.getService('CarServiceController');
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async addCars(@Body() car: carDto) {
    console.log('Car to be Added:', car);
    return this.carService.addCars(car);
  }
  
  @Delete()
  removeCar(@Body() regId: string) {
    console.log(regId, 'Removed');
    return this.carService.removeCar(regId);
  }

}
