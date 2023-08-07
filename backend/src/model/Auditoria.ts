import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    OneToMany
  } from "typeorm";
  import { Evento } from "./Evento";
  import { Notificacion } from "./Notificacion";
  
  
  @Entity("auditoria")
  export class Auditoria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_auditoria: number;
  
    @OneToOne(() => Evento, (evento) => evento.auditoria)
    evento: Evento;
  
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

    @OneToMany(() => Notificacion, (notificacion) => notificacion.auditoria)
    notificacion: Notificacion[];
  }

  //pendientes relaciones a evento / imagen si la hay
  