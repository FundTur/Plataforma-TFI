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
import { Pais } from "./Pais";
import { Beneficio } from "./Beneficio";
import { Usuario } from "./Usuario";
import { Categoria } from "./Categoria";
import { Observacion } from "./Observacion";

@Entity("convocatoria")
export class Convocatoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  imagen: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Pais, (pais) => pais.convocatorias)
  pais: Pais;

  @Column()
  idioma: string;

  @Column()
  valorFinanciamiento: number;

  @OneToMany(() => Beneficio, (beneficio) => beneficio.convocatoria)
  beneficios: Beneficio[];

  @ManyToMany(() => Usuario)
  @JoinTable()
  participantes: Usuario[];

  @Column()
  moneda: string;

  @Column()
  requisitos: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.convocatorias)
  categoria: Categoria;

  @OneToMany(() => Observacion, (observacion) => observacion.convocatoria)
  observaciones: Observacion[];

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  estado: string;

  @Column()
  isPremium: boolean;
}
