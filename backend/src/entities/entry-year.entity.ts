import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntryYear {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_year: string;
}
