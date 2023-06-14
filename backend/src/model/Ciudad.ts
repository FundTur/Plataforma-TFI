import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Pais } from "./Pais";

@Entity("ciudad")
export class Ciudad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Pais, (pais) => pais.ciudades)
  pais: Pais;
}
