import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

const movies = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('message_logged')
  async handleMessageLogged(data: Record<string, unknown>) {
    console.log(data.text);
  }

  @MessagePattern('add_movie')
  addMovie(movie) {
    movies.push(movie);
    return movies;
  }

  @MessagePattern('remove_movie')
  async removeMovie(name) {
    console.log('Name', name.name);
    console.log(
      movies.filter((movieelement) => movieelement.name !== name.name),
    );
    return movies.filter((movieelement) => movieelement.name !== name.name);
  }
}
