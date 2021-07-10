import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  place: string;

  @Column()
  phone: number;
}
