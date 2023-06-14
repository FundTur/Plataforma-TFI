import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Convocatoria } from "./Convocatoria";
import { Ciudad } from "./Ciudad";
import { Usuario } from "./Usuario";

@Entity("pais")
export class Pais extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  bandera: string;

  @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.pais)
  convocatorias: Convocatoria[];

  @OneToMany(() => Ciudad, (ciudad) => ciudad.pais)
  ciudades: Ciudad[];

  @OneToMany(() => Usuario, (usuario) => usuario.pais)
  usuarios: Usuario[];
}
