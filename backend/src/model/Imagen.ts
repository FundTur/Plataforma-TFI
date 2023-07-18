import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
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

  //pendientes relaciones a auditoria / imagen si la hay