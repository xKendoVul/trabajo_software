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

  @Column({ type: 'int4' })
  year: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'bool', default: true })
  isAvailable: boolean;
}
