/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataT {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  description: string;
}
