import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Convocatoria } from "./Convocatoria";

@Entity("categoria")
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.categoria)
  convocatorias: Convocatoria[];
}
