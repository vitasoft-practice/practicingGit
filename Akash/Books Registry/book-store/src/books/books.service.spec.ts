import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';


describe('BooksService', () => {
  let service: BooksService;

  const  data = (): Book => {
    return {
      Book : "first book",
      Price : 100
    }
    
  }

  const mockmodel ={
    find : jest.fn().mockResolvedValue([data()]),
    findById : jest.fn().mockResolvedValue(data()),
    save : jest.fn().mockResolvedValue(data())

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService,{
        provide: getModelToken('Books'),
        useValue: mockmodel

      }],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  describe('Create a book Entry', () => {
    let book :Book
    beforeEach( async () => {
      book = await service.create(data())
    })
    test('then the BooksModel.save() should be called', () => {
      expect(mockmodel.save).toBeCalled()
    })
    test('then book should be added and returns the value', ()=>{
      expect(book).toEqual(data())
    }) 
 
  })
  describe('Fetch  all books', () => {
    let book :Book[]
    beforeEach( async () => {
      book = await service.findAll()
    })
    test('then the BooksModel.find() should be called', () => {
      expect(mockmodel.find).toBeCalled()
    })
    test('then all the books should be listed', ()=>{
      expect(book).toEqual([data()])
    })

  })
  describe('Fetch a  book', () => {
    let book :Book
    const id = "12"
    beforeEach( async () => {
      book = await service.findOne(id)
    })
    test('then the BooksModel.findById() should be called', () => {
      expect(mockmodel.findById).toBeCalled()
    })
    test('then the searched book should be listed', ()=>{
      expect(book).toEqual(data())
    })

  })
  
});
