import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("./entities/cat.entity").Cat>;
    findAll(): Promise<import("./entities/cat.entity").Cat[]>;
    findOne(id: number): Promise<import("./entities/cat.entity").Cat>;
    update(id: number, updateCatDto: UpdateCatDto): Promise<{
        breed: any;
        name: string;
        age: number;
        id: number;
        deletedAt: Date;
    } & import("./entities/cat.entity").Cat>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
