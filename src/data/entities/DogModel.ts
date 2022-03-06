
   
import { IsString, Length, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('dogs')
export class DogModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(20, {
    message: 'Name is too long',
  })
  @IsString()
  name: string;

  @Column()
  @Length(0, 25)
  @IsString()
  age: string;

  @Column({ nullable: true })
  breed: string;

  @Column({ unique: true })
  phone_number: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: true })
  size: string;

  @Column({ nullable: false })
  sterilized: boolean;

  @Column({ nullable: true })
  social_with_cats: boolean;

  @Column({ nullable: true })
  social_with_dogs: boolean;

  @Column({ nullable: true })
  social_with_kids: boolean;

  @Column({ nullable: true })
  observations: string;

  @Column({ nullable: true })
  microchip: string;

  // @Column()
  // photo: 

  @Column({ nullable: true })
  profile_image_id: string;

  @Column({ nullable: true })
  price_full_day: string;

  @Column({ nullable: true })
  price_half_day: string;

  @Column({ nullable: true })
  price_walk: string;
}