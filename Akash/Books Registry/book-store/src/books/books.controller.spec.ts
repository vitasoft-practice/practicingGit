import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';





describe('BooksController', () => {
  let controller: BooksController;
  let service : BooksService;
  
  const  data = (): Book => {
    return {
      Book : "first book",
      Price : 100
    }
    
  }
  
  // const mockService = {
  //   create : jest.fn().mockResolvedValue(data()),
  //   findAll : jest.fn().mockResolvedValue([data()]),
  //   findOne : jest.fn().mockResolvedValue(data())
  
  // }
  const mockService = {
    // findAll : jest.fn(val=>{
    //   return[{
    //     Book : "first book",
    //     Price : 100
    //   }]
    // })
    findAll : jest.fn().mockResolvedValue([data()])
  }



  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
    .overrideProvider(BooksService)
    .useValue(mockService)
    .compile()
    

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
    jest.clearAllMocks();
  });

  test ("findAll books",() => {
    
    const data = controller.findAll()

    expect(data).toBeCalled()
    // expect(service.findAll()).toBeCalled() 

    // jest.spyOn(service,'findAll').mockImplementation([data()])
    // expect(controller.findAll).toHaveBeenCalled()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  // describe('Create a book Entry', () => {
  //   let book :Book
  //   beforeEach( async () => {
  //     book = await controller.create(data())
  //   })
  //   test('then the booksService.create() should be called', () => {
  //     expect(service.create).toBeCalledWith(data())
  //   })
  //   test('then book should be added and returns the value', ()=>{
  //     expect(book).toEqual(data())
  //   })

  // })
  describe('Get all book Entry', () => {
    let book :Book[]
    beforeEach( async () => {
     book = await controller.findAll();
    })
    test('then the booksService.findAll() should be called', () => {
      expect(service.findAll).toBeCalled()
    })
    test('All the books should be listed', ()=>{
      expect(book).toEqual([data()])
    })

  })
  // describe('Get a book Entry', () => {
  //   let book :Book
  //   const id = "1"
  //   beforeEach( async () => {
  //     book = await controller.findOne(id)
  //   })
  //   test('then the booksService.findOne() should be called', () => {
  //     expect(service.findOne).toBeCalledWith(id)
  //   })
  //   test('then the searched book should be listed', ()=>{
  //     expect(book).toEqual(data())
  //   })

  // })

});
