import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

describe('AnimalsController', () => {
  let controller: AnimalsController;

  const mockAnimalService ={

    addAnimal : jest.fn(addservice =>{
      return{
        id : Date.now(),
      }
    } )
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers:[AnimalsService]
    }).overrideProvider(AnimalsService)
    .useValue(mockAnimalService)
    .compile();

    controller = module.get<AnimalsController>(AnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Add a new Animal', () =>{
    expect(controller.addAnimal( 'tom' ,'dog', 1));
  });

  expect(mockAnimalService.addAnimal).toHaveBeenCalled();
 
});
 