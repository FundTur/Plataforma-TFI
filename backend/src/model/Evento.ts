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
 
  
  @Entity("evento")
  export class Evento extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_evento: number;
  
    @Column()
    nombre: string;
  
  }

  //pendientes relaciones a auditoria / imagen si la hay
  