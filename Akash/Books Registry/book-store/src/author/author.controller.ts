import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@ApiTags('Author')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  
}
