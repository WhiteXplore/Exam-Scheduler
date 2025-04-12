import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceSets {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_sets: string;
}
