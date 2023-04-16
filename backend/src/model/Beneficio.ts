import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Convocatoria } from './Convocatoria';

@Entity('beneficio')
export class Beneficio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Convocatoria, (convocatoria) => convocatoria.beneficios)
  convocatoria: Convocatoria;
}