import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';
import { Movie } from './movie.dto';

@Controller('movie')
export class AppController {
  constructor(@Inject('Practice') private readonly client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getMessageLogged(): string {
    this.client.emit<any>(
      'message_logged',
      new Message('This is a microservice test transmission'),
    );
    return 'Transmission success!';
  }

  @Post()
  addMovie(@Body() movie: Movie) {
    console.log('Movie to be Added:', movie.name);
    return this.client.send('add_movie', movie);
  }

  @Delete('/:name')
  removeMovie(@Param() name: string) {
    console.log('Movie to be removed:', name);
    return this.client.send('remove_movie', name);
  }
}
