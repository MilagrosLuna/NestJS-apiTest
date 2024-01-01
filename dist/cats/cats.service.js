"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const breed_entity_1 = require("../breeds/entities/breed.entity");
const typeorm_2 = require("typeorm");
const cat_entity_1 = require("./entities/cat.entity");
let CatsService = class CatsService {
    constructor(catsRepository, breedsRepository) {
        this.catsRepository = catsRepository;
        this.breedsRepository = breedsRepository;
    }
    async create(createCatDto) {
        const breed = await this.breedsRepository.findOneBy({
            name: createCatDto.breed,
        });
        if (!breed) {
            throw new common_1.BadRequestException('Breed not found');
        }
        const cat = this.catsRepository.create({
            name: createCatDto.name,
            age: createCatDto.age,
            breed,
        });
        return await this.catsRepository.save(cat);
    }
    async findAll() {
        return await this.catsRepository.find();
    }
    async findOne(id) {
        return await this.catsRepository.findOneBy({ id });
    }
    async update(id, updateCatDto) {
        const cat = await this.catsRepository.findOneBy({ id });
        if (!cat) {
            throw new common_1.BadRequestException('Cat not found');
        }
        let breed;
        if (updateCatDto.breed) {
            breed = await this.breedsRepository.findOneBy({
                name: updateCatDto.breed,
            });
            if (!breed) {
                throw new common_1.BadRequestException('Breed not found');
            }
        }
        return await this.catsRepository.save({
            ...cat,
            ...updateCatDto,
            breed,
        });
    }
    async remove(id) {
        return await this.catsRepository.softDelete(id);
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cat_entity_1.Cat)),
    __param(1, (0, typeorm_1.InjectRepository)(breed_entity_1.Breed)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CatsService);
//# sourceMappingURL=cats.service.js.map