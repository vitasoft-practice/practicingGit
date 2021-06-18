import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { userStub } from './stubs/user.stub';
import { UserController } from './user.controller';
import { UserService } from './user.service';

jest.mock('./user.service');

describe('UserController', () => {
  let controller: UserController;
  let service : UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  describe('get user', ()=>{
    describe('When get user method is called',()=>{
      let user:User

      beforeEach(async()=>{
        user = await controller.findOne(userStub().id);
      });

      test('Then the findOne userService is called',()=>{
        expect(service.findOne).toBeCalledWith(userStub().id);
      });

      test('Then it should return a user', ()=>{
        expect(user).toEqual(userStub());
      })
    })
  });

  describe('get users', ()=>{
    describe('When get users method is called',()=>{
      let user:User[]

      beforeEach(async()=>{
        user = await controller.findAll(userStub().name);
      });

      test('Then the findAll userService is called',()=>{
        expect(service.findAll).toBeCalled();
      });

      test('Then it should return all users', ()=>{
        expect(user).toEqual([userStub()]);
      })
    })
  });

  describe('Create user', ()=>{
    describe('When Create user method is called',()=>{
      let user:User

      beforeEach(async()=>{
        user = await controller.create(userStub());
      });

      test('Then the create userService is called',()=>{
        expect(service.create).toBeCalledWith(userStub());
      });

      test('Then it should return the created user', ()=>{
        expect(user).toEqual(userStub());
      })
    })
  });

  describe('Update user', ()=>{
    describe('When Update user method is called',()=>{
      let user:User
      let updateUserDto: UpdateUserDto

      beforeEach(async()=>{
        updateUserDto= {
          name: 'aks'
        }
        user = await controller.update(userStub().id, updateUserDto);
      });

      test('Then the update userService is called',()=>{
        expect(service.update).toBeCalledWith(userStub().id,updateUserDto);
      });

      test('Then it should return updated user', ()=>{
        expect(user).toEqual(userStub());
      })
    })
  });

  describe('delete user', ()=>{
    describe('When delete user method is called',()=>{
      let user:User

      beforeEach(async()=>{
        user = await controller.remove(userStub().id);
      });

      test('Then the remove userService is called',()=>{
        expect(service.remove).toBeCalledWith(userStub().id);
      });

      test('Then it should return a user', ()=>{
        expect(user).toBeNull();
      })
    })
  });

});
