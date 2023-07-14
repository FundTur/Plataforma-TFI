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
 
  
  @Entity("auditoria")
  export class Auditoria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_auditoria: number;
  
    @Column()
    id_evento: number;
  
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
  