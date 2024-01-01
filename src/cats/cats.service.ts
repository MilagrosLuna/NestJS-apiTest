import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private breedsRepository: Repository<Breed>,
  ) {}

  // async create(createCatDto: CreateCatDto) {
  //   const cat = this.catsRepository.create(createCatDto);
  //   return await this.catsRepository.save(cat);
  // }

  async create(createCatDto: CreateCatDto) {
    const breed = await this.breedsRepository.findOneBy({
      name: createCatDto.breed,
    });

    if (!breed) {
      throw new BadRequestException('Breed not found');
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

  async findOne(id: number) {
    return await this.catsRepository.findOneBy({ id });
  }

  // async update(id: number, updateCatDto: UpdateCatDto) {
  //   return await this.catsRepository.update(id, updateCatDto);
  // }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new BadRequestException('Cat not found');
    }

    let breed;
    if (updateCatDto.breed) {
      breed = await this.breedsRepository.findOneBy({
        name: updateCatDto.breed,
      });

      if (!breed) {
        throw new BadRequestException('Breed not found');
      }
    }

    return await this.catsRepository.save({
      ...cat,
      ...updateCatDto,
      breed,
    });
  }

  async remove(id: number) {
    return await this.catsRepository.softDelete(id); // softremove necesita la instancia, tendria q primero buscarlo y obtener la instancia
    // return await this.catsRepository.delete(id);
  }
}

/**
 * En el soft delete, se utiliza una columna especial en la tabla para marcar
 * los registros como "eliminados" sin eliminarlos físicamente de la base de datos.
 * Esta columna, generalmente llamada deletedAt (o el nombre que hayas especificado),
 *  almacena la fecha y hora en la que se realizó el soft delete
 */
