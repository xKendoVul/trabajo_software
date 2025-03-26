import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('increment', { type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  brand: string;

  @Column({ type: 'varchar', length: 50 })
  model: string;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @Column({ type: 'int4', nullable: false })
  year: number;

  @Column({ type: 'int4' })
  price: number; // a que hace referencia el versionado

  @Column({ type: 'bool', default: true })
  isAvailable: boolean; // investigar los tipos de datos con los que trabaja postgresql en typeorm
}
