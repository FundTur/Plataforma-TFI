import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity,
  } from "typeorm";
import { Convocatoria } from "./Convocatoria";
 
  
  @Entity("imagen")
  export class Imagen extends BaseEntity {
    @PrimaryGeneratedColumn()
    uuid_imagen: number;
  
    @Column()
    nombre_imagen: string;

    @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.imagen)
    convocatorias: Convocatoria[];
  }