import {
  Controller,
  Get,
  OnModuleInit,
  Post,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { microServiceOptions } from './grpc.options';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Movie, MovieService, RemoveRequest } from './grpc.interface';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Controller('movie')
export class MovieServiceController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  @Client(microServiceOptions) private readonly client: ClientGrpc;

  private movieService: MovieService;

  onModuleInit() {
    this.movieService = this.client.getService<MovieService>(
      'MovieServiceController',
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async addMovie(@Body() movie: Movie) {
    console.log('Movie to be Add:', movie.name);
    return this.movieService.addMovie(movie);
  }

  @Delete('/:name')
  removeMovie(@Param() name: string) {
    console.log('Movie to be removed:', name);
    return this.movieService.removeMovie(name);
  }
}
