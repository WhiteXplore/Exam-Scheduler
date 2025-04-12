import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class MaintenanceRank {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_rank: string;
}
