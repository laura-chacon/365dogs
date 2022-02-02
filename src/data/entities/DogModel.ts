
   
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dogs')
export class DogModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  age: string;

  @Column()
  breed: string;

  @Column({ unique: true })
  phone_number: string;

  @Column()
  gender: string;

  @Column()
  size: string;

  @Column()
  sterilized: boolean;

  @Column()
  social_with_cats: boolean;

  @Column()
  social_with_dogs: boolean;

  @Column()
  social_with_kids: boolean;

  @Column()
  observations: string;

  @Column()
  microchip: string;

  // @Column()
  // photo: 

  @Column()
  profile_image_id: string;

  @Column()
  price_full_day: string;

  @Column()
  price_half_day: string;

  @Column()
  price_walk: string;
}