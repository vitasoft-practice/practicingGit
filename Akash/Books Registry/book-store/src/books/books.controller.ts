import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import {Request} from 'express'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}


  @Post()
  create(@Req() request: Request ) {
    const data = this.booksService.create(request.body);
    console.log(data)
    return data;
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(@Req() request: Request) {
    return this.booksService.update(request.params.id,request.body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}

