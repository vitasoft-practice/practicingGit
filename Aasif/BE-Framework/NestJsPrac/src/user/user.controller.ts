import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { DefaultMessage, PaginatedDataT, ResponseStatus, handleResponse } from 'src/constants';
import { AuthGuard } from '../auth/auth.guard';
import { UsersAddDTO } from './dto/add.dto';
import { ObjectId, isValidObjectId } from 'mongoose';
import { LogExecutionTime } from 'src/utils/log-execution.decorator';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterQueryDTO } from './dto/filterQuery.dto';
import { getFilterPayload, getPaginatedData } from 'src/utils/helpers';

@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
  ) { }

  async getUserById(id: ObjectId | string) {
    const isValidId = isValidObjectId(id);
    if (!isValidId) {
      throw new HttpException(
        DefaultMessage.NOT_EXISTS,
        ResponseStatus.BAD_REQUEST,
      );
    }
    const user = await this.UserService.findOne({ _id: id })
    if (!user) {
      throw new HttpException(
        DefaultMessage.NOT_EXISTS,
        ResponseStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  async validateEmail(email) {
    let exist = await this.UserService.findOne({ email: email });
    if (exist) {
      throw new HttpException(
        DefaultMessage.EMAIL_ALREADY_EXISTS,
        ResponseStatus.BAD_REQUEST,
      );
    }
    return;
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Query() reqQuery: FilterQueryDTO) {
    const { page = 1, limit = 10, search = "" } = reqQuery;

    const searchableFields = ['first_name', 'last_name', 'email'];

    const { filters, pagination } = getFilterPayload(search, searchableFields, { page, limit: Number(limit) });

    const users = await this.UserService.findAll(filters);

    const data: PaginatedDataT = getPaginatedData(users, pagination)

    return handleResponse(data, "Records Fetched Successfully")
  }

  @Post()
  async post(@Body() body: UsersAddDTO, @LogExecutionTime() req) {
    await this.validateEmail(body.email)
    const data = await this.UserService.create(body);

    req.logExecutionTime();
    return handleResponse(data, "Registration Successful")
  }

  @Delete(":user_id")
  @UseGuards(AuthGuard)
  async delete(@Param('user_id') user_id: ObjectId | string) {
    await this.getUserById(user_id);
    await this.UserService.delete(user_id);
    return handleResponse(null, "User Deleted Successfully")
  }
}
