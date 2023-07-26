import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    OneToMany,
  } from "typeorm";
  import { Auditoria } from "./Auditoria";
import { Notificacion } from "./Notificacion";
 
  
  @Entity("evento")
  export class Evento extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_evento: number;
  
    @Column()
    nombre: string;

    @OneToOne(() => Auditoria, (auditoria) => auditoria.evento)
    auditoria: Auditoria;

    @OneToMany(() => Notificacion, (notificacion) => notificacion.evento)
    notificacion: Notificacion[];
  } 