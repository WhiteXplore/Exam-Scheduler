import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User_Accounts {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  position: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
