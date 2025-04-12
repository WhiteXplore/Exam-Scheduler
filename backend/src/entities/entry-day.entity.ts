import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntryDay {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_day: string;
}
