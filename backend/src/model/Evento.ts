import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
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

    @OneToOne(() => Auditoria, (auditoria) => auditoria.evento)
    auditoria: Auditoria;
  } 