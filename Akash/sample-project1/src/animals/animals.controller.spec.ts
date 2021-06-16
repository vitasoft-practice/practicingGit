import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

describe('AnimalsController', () => {
  let controller: AnimalsController;

  const mockAnimalService ={

    addNewAnimal : jest.fn(addservice =>{
      return(addservice.id)
    } )
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers:[AnimalsService]
    })
    .compile();

    controller = module.get<AnimalsController>(AnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Add a new Animal', () =>{
    expect(controller.addAnimal( 'tom' ,'dog', 1));
  });

  expect(mockAnimalService.addNewAnimal).toHaveBeenCalled();
 
  it('Get all animals', ()=>{

    expect(controller.getAllAnimals())
  });
});
 