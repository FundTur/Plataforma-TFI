import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
  } from "typeorm";
  import { Imagen } from "./Imagen";
 
  
  @Entity("archivo")
  export class Archivo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoria: string;
  
    @Column()
    nombre: string;

    @OneToOne(() => Imagen, (imagen) => imagen.archivo)
    imagen: Imagen;
  } 