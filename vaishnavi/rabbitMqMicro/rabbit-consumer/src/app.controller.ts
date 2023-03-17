/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
const listOfUsers = [
  {
    name: 'vaish',
    address: 'chennai',
  },
  {
    name: 'userr a',
    address: 'trl',
  },
];


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'test', cmd: 'create' })
  create(testDto) {
    console.log('hiii', testDto);
    return testDto + 'checkedd';
  }

  @MessagePattern('addUser')
  addingUser(userDto) {
    try {
      listOfUsers.push(userDto);
    } catch (e) {
      console.log('error:', e);
    }
    return listOfUsers;
  }

  @MessagePattern('updateUser')
  updateUser(userDto) {
    try {
      Object.entries(listOfUsers).forEach((entry) => {
        const [key, value] = entry;
        if (value.name == userDto.name) {
          value.address = userDto.address;
          console.log('user address edited');
        }
      });
    } catch (e) {
      console.log('error:', e);
    }
    return listOfUsers;
  }
}
