import { Breed } from 'src/breeds/entities/breed.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
export declare class CatsService {
    private catsRepository;
    private breedsRepository;
    constructor(catsRepository: Repository<Cat>, breedsRepository: Repository<Breed>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<Cat>;
    update(id: number, updateCatDto: UpdateCatDto): Promise<{
        breed: any;
        name: string;
        age: number;
        id: number;
        deletedAt: Date;
    } & Cat>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
