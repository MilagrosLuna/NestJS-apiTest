import { Breed } from 'src/breeds/entities/breed.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  // @Column()
  // breed: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    // cascade: true,
    eager: true, // para que traiga las raza al hacer un findOne
  })
  breed: Breed;

}

/* patron de diseño repository, interfaz entre la capa de la logica del negocio y la capa de acceso a datos BD */
