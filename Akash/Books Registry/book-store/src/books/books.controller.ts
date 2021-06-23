import { Controller, Get, Post, Body, Patch, Param, Delete, Req, NotFoundException, NotAcceptableException, BadRequestException } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}


  @Post()
  async create(@Body() createbookDto :CreateBookDto ) {
    const data = await this.booksService.create(createbookDto)
    if (!data){
      throw new BadRequestException()
    }
    return data;
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.booksService.findOne(id);
    if (!data){
      throw new NotFoundException()
    }
    return data
  }

  // @Patch(':id')
  // update(@Param() id: string, @Body() updateBookDto:UpdateBookDto) {
  //   return this.booksService.update(id,updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(id);
  // }
}

