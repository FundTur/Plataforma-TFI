import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToMany,
  BaseEntity,
} from "typeorm";
import { Convocatoria } from "./Convocatoria";
import { Archivo } from "./Archivo";
import { Resolucion } from "./Resolucion";

@Entity("imagen")
export class Imagen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.imagen)
  convocatorias: Convocatoria[]; // ¿Cómo se expresa esta relacion en el script?

  @OneToOne(() => Archivo, (archivo) => archivo.imagen)
  archivo: Archivo;
  
  @ManyToMany(() => Resolucion, (resolucion) => resolucion.imagen)
  resolucion: Resolucion[];
}
