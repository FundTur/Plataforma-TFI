import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Convocatoria } from "./Convocatoria";
import { Ciudad } from "./Ciudad";
import { Usuario } from "./Usuario";

@Entity("pais")
export class Pais {
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
