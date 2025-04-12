import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntryClass {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_class: string;
}
