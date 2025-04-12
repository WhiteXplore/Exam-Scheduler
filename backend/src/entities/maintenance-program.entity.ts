import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceProgram {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_program_code: string;

  @Column()
  maintenance_program: string;
}
