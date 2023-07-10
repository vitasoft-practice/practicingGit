// import { lastValueFrom } from 'rxjs';
import { Injectable, Inject, BadGatewayException } from '@nestjs/common';
import { Movie } from './_proto/movie.type';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class MovieService {
  constructor(
    // private appService: AppService,
    @Inject('TEST_SERVICE') private readonly client: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async removeMovie(list: Movie[], nameOfMovieToBeRemoved: string) {
    const newList = list.filter(
      (movie) => movie.name !== nameOfMovieToBeRemoved,
    );
    // this.client.send({ cmd: 'after_delete' }, newList )
    return { movies: newList };
  }
  // async sendMovie(list: Movie[], nameOfMovieToBeRemoved: string) {
  async sendMovie(movie: Movie[]) {
    console.log(movie, '===', {movies:movie});
    await lastValueFrom(this.client.send({ cmd: 'sendMovie' }, {movies:movie}))
    // .catch((error)=>{
    //   throw new BadGatewayException(error,'new error')}
    // );
    return {movies:movie};
    // const newList = list.filter(
    //   (movie) => movie.name !== nameOfMovieToBeRemoved,
    // );
    // console.log('newlist', newList);
    // const last = lastValueFrom(
    //   this.client.send({ cmd: 'after_delete' }, { movies: newList }),
    // );
    // last.catch((error) => {
    //   console.log('error: ', error);
    //   return 'an error has occured';
    // });
  }
}
