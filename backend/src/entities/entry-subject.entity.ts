import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntrySubject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_subject_year: string;

  @Column()
  entry_subject_code: string;

  @Column()
  entry_subject: string;
}
