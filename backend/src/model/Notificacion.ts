import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    ManyToOne,
    BaseEntity,
  } from "typeorm";
  import { Evento } from "./Evento";
  import { Auditoria } from "./Auditoria";
  import { Usuario } from "./Usuario";
  
  @Entity("notificacion")
  export class Notificacion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Evento, (evento) => evento.notificacion)
    evento: Evento; 
  
    @ManyToOne(() => Auditoria, (auditoria) => auditoria.notificacion)
    auditoria: Auditoria;
    
    @Column()
    titulo: string;
    
    @Column()
    descripcion: string;

    @ManyToMany(() => Usuario, (usuario) => usuario.notificacion)
    usuario: Usuario[];
}
