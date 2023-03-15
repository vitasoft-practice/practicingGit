import { Test, TestingModule } from '@nestjs/testing';
import { MovieServiceController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: MovieServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieServiceController],
      providers: [AppService],
    }).compile();

    appController = app.get<MovieServiceController>(MovieServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
