import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
export declare class BreedsController {
    private readonly breedsService;
    constructor(breedsService: BreedsService);
    create(createBreedDto: CreateBreedDto): Promise<import("./entities/breed.entity").Breed>;
    findAll(): Promise<import("./entities/breed.entity").Breed[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateBreedDto: UpdateBreedDto): Promise<string>;
    remove(id: number): Promise<string>;
}
