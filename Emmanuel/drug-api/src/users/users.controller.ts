import { Body, Controller, Post, Get, Put, Delete, Res, Param, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { Public } from 'src/auth/auth.decorator';

import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Public()
    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            username,
            hashedPassword,
        );
        return result;
    }

    @Public()
    @Get('/:name')
async getUser(@Res() response, @Param('name') username: string) {
 try {
    const existingUser = await
    this.usersService.findOne(username);
    return response.status(HttpStatus.OK).json({
    message: 'User found successfully',existingUser,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Public()
@Put('/:name')
async updateUser(@Res() response,@Param('name') userName: string,
@Body() updateUserDto: UpdateUserDto) {
  try {
   const existingUser = await this.usersService.updateUser(userName, updateUserDto);
  return response.status(HttpStatus.OK).json({
  message: 'User has been successfully updated',
  existingUser,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Public()
@Delete('/:name')
async deleteUser(@Res() response, @Param('name') username: string)
{
  try {
    const deletedUser = await this.usersService.deleteUser(username);
    return response.status(HttpStatus.OK).json({
    message: 'User deleted successfully',
    deletedUser,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}