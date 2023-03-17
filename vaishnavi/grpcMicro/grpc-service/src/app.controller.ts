/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

interface carType {
  regId: string;
  name: string;
  brand: string;
}

interface deleteType {
  regId: string;
}

const allCars: carType[] = [
  {
    regId: 'F8 AUXX',
    name: 'roma',
    brand: 'ferrari',
  },
  {
    regId: 'FXe',
    name: 'f8',
    brand: 'ferrari',
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getCars(): carType[] {
  //   return allCars;
  // }

  @GrpcMethod('CarServiceController', 'AddCars')
  addCars(car: carType) {
    console.log('car in micro:', car);
    allCars.push(car);
    console.log('-->', car);
    return { cars: allCars };
  }

  @GrpcMethod('CarServiceController', 'RemoveCar')
  removeCar(car: deleteType) {
    console.log('deletename ==>', car);

    allCars.forEach(function (element, index) {
      console.log('heree', element.regId, car);

      if (element.regId === car.regId) {
        console.log('delete successs');

        allCars.splice(index, 1);
      }
    });

    console.log('newcheck', allCars);

    return { cars: allCars };
  }

}
