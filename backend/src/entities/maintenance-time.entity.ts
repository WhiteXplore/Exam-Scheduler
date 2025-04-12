import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceTime {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_start_time: string;

  @Column()
  maintenance_end_time: string;
}
