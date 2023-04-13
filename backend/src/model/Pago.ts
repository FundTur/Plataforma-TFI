import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Usuario } from "./Usuario";
import { Plan } from "./Plan";

@Entity("pago")
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateCreated: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pagos)
  usuario: Usuario;

  @ManyToOne(() => Plan, (plan) => plan.pagos) 
  plan: Plan;
}
