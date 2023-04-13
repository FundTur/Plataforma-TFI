import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Convocatoria } from "./Convocatoria";

@Entity("categoria")
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.categoria)
  convocatorias: Convocatoria[];
}
