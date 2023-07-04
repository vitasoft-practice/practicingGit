import { Controller, Get } from '@nestjs/common';
import { MovieService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Movie, RemoveRequest } from './_proto/movie.type';

const movies = [
  {
    name: 'test',
    rating: 9.6,
  },
];

@Controller()
export class MovieServiceController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getHello(): string {
    return this.movieService.getHello();
  }

  @GrpcMethod('MovieServiceController', 'AddMovie')
  addMovie(movie: Movie) {
    console.log('movie name:', movie.name);
    movies.push(movie);
    console.log(movies);
    return { movies };
  }

  @GrpcMethod('MovieServiceController', 'RemoveMovie')
  removeMovie(nameOfMovieToBeRemoved: RemoveRequest) {
    console.log('deletename', nameOfMovieToBeRemoved.name);
    console.log(
      this.movieService.removeMovie(movies, nameOfMovieToBeRemoved.name),
    );
    return this.movieService.removeMovie(movies, nameOfMovieToBeRemoved.name);
  }
}
