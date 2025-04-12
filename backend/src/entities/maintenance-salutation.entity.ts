import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceSalutation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_salutation: string;
}
