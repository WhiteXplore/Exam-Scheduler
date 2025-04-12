import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { EntryTeacher } from './entry-teacher.entity';
@Entity()
export class EntryTeacherLoad {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @ManyToOne(
    () => EntryTeacher,
    (entryTeacherLoad) => entryTeacherLoad.entryTeacherLoad,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'entryLoad_class_id' })
  entryTeacherLoad: EntryTeacher;
  @Column()
  teacher_entry_program: string;

  @Column()
  teacher_entry_year: string;

  @Column()
  teacher_entry_set: string;
}
