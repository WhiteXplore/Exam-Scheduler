import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceDesignation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_designation: string;
}
