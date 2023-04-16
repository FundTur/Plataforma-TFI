import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { Pago } from "./Pago";
import { Rol } from "./Rol";
import { Pais } from "./Pais";

@Entity("usuario")
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  email: string;

  @Column()
  password: string;

  
  @Column()
  estado: string;
  
  @Column()
  telefono: string;
  
  @Column()
  estadoPlan: string;
  
  // Meta datos de la tabla
  @UpdateDateColumn()
  dateUpdated: Date;

  @CreateDateColumn()
  dateCreated: Date;

  // Los pagos que realizara el usuario
  @OneToMany(() => Pago, (pago) => pago.usuario)
  pagos: Pago[];

  // Rol del usuario
  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  rol: Rol;

  @ManyToOne(() => Pais, (pais) => pais.usuarios)
  pais: Pais;
}
