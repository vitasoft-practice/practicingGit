import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

jest.mock('./animals.service');

describe('AnimalsController', () => {
  let controller: AnimalsController;
  let service : AnimalsService;

  const mockAnimalService ={

    addNewAnimal : jest.fn(addservice =>{
      return ("24")
    } ),

    getAnimal : jest.fn(getAnimal =>{
      return ({

      })
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers:[AnimalsService]
    })
    .compile();

    controller = module.get<AnimalsController>(AnimalsController);
    service = module.get<AnimalsService>(AnimalsService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Add a new Animal', async () =>{
    expect(controller.addAnimal( 'tom' ,'dog', 1));
  });

  //expect(mockAnimalService.addNewAnimal).toHaveBeenCalled();

  describe('getAllAnimals', ()=>{
    it('Get all animals', async ()=>{
      const result = ['test'];
      jest.spyOn(service,'getAllAnimals').mockImplementation(()=> result);

      expect(await controller.getAllAnimals()).toBe(result);
    });

  })
 
  
});
 