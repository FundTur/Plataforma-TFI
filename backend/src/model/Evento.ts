import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
    BaseEntity,
    OneToOne,
  } from "typeorm";
  import { Auditoria } from "./Auditoria";
 
  
  @Entity("evento")
  export class Evento extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_evento: number;
  
    @Column()
    nombre: string;

    @OneToOne(() => Auditoria, (auditoria) => auditoria.id_evento)
    id_auditoria: Auditoria;
  
  }

 
  