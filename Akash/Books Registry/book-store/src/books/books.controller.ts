import { Controller, Get, Post, Body, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

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
    const data = await this.booksService.findAll();
    if (!data){
      throw new NotFoundException()
    }
    return data
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

