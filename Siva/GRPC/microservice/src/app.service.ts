import { Injectable } from '@nestjs/common';
import { Movie } from './_proto/movie.type';

@Injectable()
export class MovieService {
  getHello(): string {
    return 'Hello World!';
  }

  removeMovie(list: Movie[], nameOfMovieToBeRemoved: string) {
    const newList = list.filter(
      (movie) => movie.name !== nameOfMovieToBeRemoved,
    );
    return { movies: newList };
  }
}
