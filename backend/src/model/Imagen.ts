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
 
  
  @Entity("imagen")
  export class Imagen extends BaseEntity {
    @PrimaryGeneratedColumn()
    uuid_imagen: number;
  
    @Column()
    nombre_imagen: string;
  
  }

  //pendientes relaciones a auditoria / imagen si la hay