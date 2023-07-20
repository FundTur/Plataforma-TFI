import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Convocatoria } from "./Convocatoria";

@Entity("imagen")
export class Imagen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Convocatoria, (convocatoria) => convocatoria.imagen)
  convocatorias: Convocatoria[];
}
