import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import { User } from "./schemas/user.schema"
import { UserModel } from "./stubs/user.model"
import { userStub } from "./stubs/user.stub"
import { UserRepository } from "./user.repository"

describe('UserRepository',()=>{

    
    let userRepository: UserRepository;
    
    describe('findOperations',()=>{
        

        let userModel: UserModel;

        beforeEach(async ()=>{
            const moduleRef = await Test.createTestingModule({
                providers:[
                    UserRepository,
                    {
                        provide: getModelToken(User.name),
                        useClass: UserModel
                    }
                ]
            }).compile();
            userRepository= moduleRef.get<UserRepository>(UserRepository);
            userModel = moduleRef.get<UserModel>(getModelToken(User.name));
    
            jest.clearAllMocks();
    
        });
    
        describe('findOne',()=>{
            describe('When findOne is called',()=>{
                let user :User
    
                beforeEach(async ()=>{
                    jest.spyOn(userModel,'findOne');
                    user = await userRepository.findOne({id: userStub().id})
                })
    
                test('then userModel is called',()=>{
                    expect(userModel.findOne).toHaveBeenCalledWith({id: userStub().id},{_id:0,__v:0})
                })
    
                test('then user is returned',()=>{
                    expect(user).toEqual(userStub())
                })
            })
        })
    
        describe('find',()=>{
            describe('When find is called',()=>{
                let user :User[]
    
                beforeEach(async ()=>{
                    jest.spyOn(userModel,'find');
                    user = await userRepository.find({id: userStub().id})
                })
    
                test('then userModel is called',()=>{
                    expect(userModel.find).toHaveBeenCalledWith({id: userStub().id})
                })
    
                test('then user is returned',()=>{
                    expect(user).toEqual([userStub()])
                })
            })
        })
    
        describe('findOneAndUpdate',()=>{
            describe('When findOneAndUpdate is called',()=>{
                let user :User
    
                beforeEach(async ()=>{
                    jest.spyOn(userModel,'findOneAndUpdate');
                    user = await userRepository.update({id: userStub().id},userStub()) 
                })
    
                test('then userModel is called',()=>{
                    expect(userModel.findOneAndUpdate).toHaveBeenCalledWith({id: userStub().id},userStub(),{new:true})
                })
    
                test('then user is returned',()=>{
                    expect(user).toEqual(userStub())
                })
            })
        })

        

    })

    describe('createOperations',()=>{
        beforeEach(async ()=>{
            const moduleRef = await Test.createTestingModule({
                providers:[
                    UserRepository,
                    {
                        provide: getModelToken(User.name),
                        useClass: UserModel
                    }
                ]
            }).compile();
            userRepository= moduleRef.get<UserRepository>(UserRepository);
    
        });
        describe('create',()=>{
            describe('When create is called',()=>{
                let user :User
                let saveSpy: jest.SpyInstance
                let constructorSpy: jest.SpyInstance
    
    
                beforeEach(async ()=>{
                    saveSpy= jest.spyOn(UserModel.prototype,'save')
                    constructorSpy = jest.spyOn(UserModel.prototype,'constructorSpy')
                    user = await userRepository.create(userStub())
                })
    
                test('then userModel is called',()=>{
                    expect(saveSpy).toHaveBeenCalled()
                    expect(constructorSpy).toHaveBeenCalledWith(userStub())
                })
    
                test('then user is returned',()=>{
                    expect(user).toEqual(userStub())
                })
            })
        })

    })

    

    
})