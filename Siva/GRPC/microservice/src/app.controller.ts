import { Controller, Get, NotFoundException } from '@nestjs/common';
import { MovieService } from './app.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { Movie, RemoveRequest } from './_proto/movie.type';
import { throwError } from 'rxjs';

const movies = [
  {
    name: 'test',
    rating: 10,
    review: 'good',
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
    console.log('movie name to be added:', movie.name);
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
    // console.log(
    //   'sendmsms',
    //   this.movieService.sendMovie(movies, nameOfMovieToBeRemoved.name),
    // );
    return this.movieService.removeMovie(movies, nameOfMovieToBeRemoved.name);
  }
  @GrpcMethod('MovieServiceController', 'SendMovie')
  sendMovie(movie: Movie, exception: RpcException) {
    movies.push(movie);
    console.log({ movies }, 'send movies', movies);
    return (
      this.movieService
        .sendMovie(movies)
        .catch((error) => {
          console.log(error);
          return throwError(() => new RpcException(error.response));
        })
    );
  }
}
