import { Connection, Repository } from 'typeorm';
import { DogModel } from '@/data/entities/DogModel';

interface ICreateDogData {
  name: string;
  age: string;
  gender: string;
  sterilized: boolean;
  priceFullDay: string;
  priceHalfDay: string;
  priceWalk: string;
}

const a = {name: 'a'} as DogModel;

export class DogsRepository {
  private ormRepository: Repository<DogModel>;

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(DogModel);
  }

  public async getAll(): Promise<DogModel[]> {
    return await this.ormRepository.find();
  }

  public async create({ 
    name, 
    age, 
    gender, 
    sterilized,
    priceFullDay,
    priceHalfDay,
    priceWalk,
  }: ICreateDogData): Promise<DogModel> {
    const dog = this.ormRepository.create({
      name,
      age,
      gender,
      sterilized,
      price_full_day: priceFullDay,
      price_half_day: priceHalfDay,
      price_walk: priceWalk,
    });
    await this.ormRepository.save(dog);
    return dog;
  }
}