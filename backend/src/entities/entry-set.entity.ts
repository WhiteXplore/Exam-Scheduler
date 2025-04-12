import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntrySet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_set: string;
}
