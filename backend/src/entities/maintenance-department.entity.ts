import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaintenanceDepartment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  maintenance_department_code: string;

  @Column()
  maintenance_department: string;
}
