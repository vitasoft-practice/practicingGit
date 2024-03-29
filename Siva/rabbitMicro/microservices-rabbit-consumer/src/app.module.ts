/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Data2 } from './app.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: async () => ({
        type: 'mysql',
        port: Number(3306),
        username: 'Vitasoft',
        password: 'Vitasoft@2019',
        database: 'testnew',
        host: '192.168.0.118',
        entities: [Data2],
        synchronize: true,
      }),
      //
      // ]
    }),
    TypeOrmModule.forFeature([Data2]),
    // TypeOrmModule.forRootAsync({
    //   imports: [],
    //   inject: [],
    //   useFactory: async () => ({
    //     type: 'mysql',
    //     port: Number(3306),
    //     username: 'Vitasoft',
    //     password: 'Vitasoft@2019',
    //     database: 'test',
    //     host: '192.168.0.118',
    //     entities: [DataT],
    //     synchronize: true,
    //   }),
    //   //
    //   // ]
    // }),
    // TypeOrmModule.forFeature([DataT]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
