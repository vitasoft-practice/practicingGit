import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
<<<<<<< HEAD
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
=======
import { AuthService } from 'src/auth/auth.service';
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,private readonly authService : AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any{
    return this.authService.login(req.user);
  }

  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const data = this.usersService.create(createUserDto);
    console.log(data)
  }

<<<<<<< HEAD
  @UseGuards(JwtAuthGuard)
=======
  
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
