import { Connection, Repository } from 'typeorm';
import { DogModel } from '@/data/entities/DogModel';

interface ICreateDogData {
  name: string;
}

export class DogsRepository {
  private ormRepository: Repository<DogModel>;

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(DogModel);
  }

  public async getAll(): Promise<DogModel[]> {
    return await this.ormRepository.find();
  }

  public async create({ name }: ICreateDogData): Promise<DogModel> {
    const dog = this.ormRepository.create({
      name,
    });
    await this.ormRepository.save(dog);
    return dog;
  }
}