/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// export class DataT {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 500 })
//   name: string;

//   @Column('text')
//   description: string;
// }
export class Data2 {
  // @Column({ length: 500 })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('int')
  rating: number;
  @Column('text')
  review: string;
}
