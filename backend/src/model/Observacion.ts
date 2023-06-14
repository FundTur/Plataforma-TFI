import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";

import { Usuario } from "./Usuario";
import { Convocatoria } from "./Convocatoria";

@Entity("observacion")
export class Observacion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @ManyToOne(() => Convocatoria, (convocatoria) => convocatoria.observaciones)
  convocatoria: Convocatoria;
}
