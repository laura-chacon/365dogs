
   
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  price_full_day: string;

  @Column()
  price_half_day: string;

  @Column()
  price_walk: string;
}