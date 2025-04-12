import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceSchoolYear {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_school_year: string;
}
