import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pago } from "./Pago";

@Entity("plan")
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @OneToMany(() => Pago, (pago) => pago.plan)
  pagos: Pago[];
}
