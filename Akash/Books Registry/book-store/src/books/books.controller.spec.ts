import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  const mockService = {
  
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
      .overrideProvider(BooksService)
      .useValue(mockService)
      .compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  }); 
 
  it('Post a Book  ', async () => {
    expect(await controller.create) 
  });

  it('Get all Books', () => {  
    expect( controller.findAll)   
  });
  it('Get one Book', async () => {  
    expect(await controller.findOne) 
  });
});




// test('should be defined', () => {
  //   const id ="12"
  //   expect(controller.findOne(id)).toEqual([{
  //     Book : "book1",
  //     Price : 100
  //   }]);
  // });

  // describe('Create a book Entry', () => {
  //   let book: Book;
  //   beforeEach(async () => {
  //     book = await controller.create();
  //   });
  //   test('then the booksService.create() should be called', () => {
  //     expect(service.create).toBeCalledWith(data());
  //   });
  //   test('then book should be added and returns the value', () => {
  //     expect(book).toEqual(data());
  //   });
  // });
  // describe('Get all book Entry', () => {
  //   let book: Book[];
  //   beforeEach(async () => {
  //     book = await controller.findAll();
  //   });
  //   // test('then the booksService.findAll() should be called', () => {
  //   //   expect(service.findAll).toBeCalled()
  //   // })
  //   test('All the books should be listed', () => {
  //     expect(book).toEqual([data()]);
  //   });
  // });
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