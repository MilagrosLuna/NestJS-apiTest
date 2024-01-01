import { Repository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
export declare class BreedsService {
    private readonly breedsRepository;
    constructor(breedsRepository: Repository<Breed>);
    create(createBreedDto: CreateBreedDto): Promise<Breed>;
    findAll(): Promise<Breed[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateBreedDto: UpdateBreedDto): Promise<string>;
    remove(id: number): Promise<string>;
}
