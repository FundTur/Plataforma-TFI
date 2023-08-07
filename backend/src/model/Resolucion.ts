import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    ManyToMany,
  } from "typeorm";
  import { Imagen } from "./Imagen";
 
  
  @Entity("resolucion")
  export class Resolucion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;

    @Column()
    ancho: number;

    @Column()
    alto: number;

    @ManyToMany(() => Imagen, (imagen) => imagen.resolucion)
    imagen: Imagen[];
  } 