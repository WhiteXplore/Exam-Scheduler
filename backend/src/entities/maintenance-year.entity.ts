import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceYear {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_year: string;
}
