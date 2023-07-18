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
  import { Evento } from "./Evento";
  
  @Entity("auditoria")
  export class Auditoria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_auditoria: number;
  
    @OneToOne(() => Evento, (evento) => evento.auditoria)
    id_evento: Evento;
  
    @Column()
    evento_tipo: string;
  
    @Column()
    detalle: string;

    @Column()
    ip: string;

    @Column()
    correo_usuario: string;

    @Column()
    fecha_creacion: Date;
    
    
  }

  //pendientes relaciones a evento / imagen si la hay
  