import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, BadGatewayException, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({type: User})
  @ApiBadGatewayResponse()
  @ApiNotFoundResponse()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const result = this.userService.create(createUserDto);
    if (!result){
      throw new BadGatewayException();
    }
    return result;
  }

  @ApiOkResponse({type:User, isArray: true})
  @ApiBadGatewayResponse()
  @ApiQuery({name:'name', required: false})
  @ApiNotFoundResponse()
  @Get()
  async findAll(@Query('name') name:string):Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOkResponse({type:User})
  @ApiBadGatewayResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number):Promise<User> {
    const result = this.userService.findOne(id);
    if (!result){
      throw new NotFoundException();
    }
    return result;
  }

  @ApiOkResponse({type:User})
  @ApiBadGatewayResponse()
  @ApiNotFoundResponse()
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto):Promise<User> {
    const result =this.userService.update(id, updateUserDto);
    if (!result){
      throw new NotFoundException();
    }
    return result;
  }

  @ApiOkResponse()
  @ApiBadGatewayResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    const result = this.userService.remove(+id);
    if (!result){
      throw new NotFoundException();
    }
    return null;
  }
}
