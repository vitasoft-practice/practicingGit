/* eslint-disable prettier/prettier */
import { Observable } from 'rxjs';

export interface RemoveRequest {
  name: string;
}

export interface Movie {
  name: string;
  rating: number;
  review: string;
}
export interface MovieService {
  addMovie(movie: Movie): Observable<Movie[]>;
  removeMovie(nameOfMovie: string): Observable<Movie[]>;
  sendMovie(movie: Movie): Observable<Movie[]>;
}
