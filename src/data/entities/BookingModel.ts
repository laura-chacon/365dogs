
   
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookings')
export class BookingModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user_id: string;

  @Column()
  dog_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  observations: string;

  @Column()
  social_with_cats: boolean;

  @Column()
  social_with_dogs: boolean;

  @Column()
  social_with_kids: boolean;
}