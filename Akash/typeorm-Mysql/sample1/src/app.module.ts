import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDetail } from './user-details/entities/user-detail.entity';
import { UserDetailsModule } from './user-details/user-details.module';

@Module({
  imports: [
    UserDetailsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3001 ,
      username: '',
      password: '',
      database: '',
      entities: [UserDetail],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
