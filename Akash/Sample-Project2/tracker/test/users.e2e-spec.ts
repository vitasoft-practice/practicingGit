import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersModule } from '../src/users/users.module';
import { UsersService } from '../src/users/users.service';
import { User } from '../src/users/entities/user.entity';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  const mockService = {
      find : jest.fn()
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).overrideProvider(UsersService)
    .useValue(mockService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
  });
});
