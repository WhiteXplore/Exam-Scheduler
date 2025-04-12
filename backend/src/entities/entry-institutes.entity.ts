import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntryInstitutes {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_institutes: string;
}
