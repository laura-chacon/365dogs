
   
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class ImageModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  dog_id: string;

  // @Column()
  // data: string;
}