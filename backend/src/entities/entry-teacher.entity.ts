import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EntryTeacherLoad } from './entry_teacher_load.entity';
@Entity()
export class EntryTeacher {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_salutation: string;

  @Column()
  entry_first_name: string;

  @Column()
  entry_middle_name: string;

  @Column()
  entry_last_name: string;

  @Column()
  entry_rank: string;

  @Column()
  entry_department: string;

  @Column()
  entry_designation: string;

  @Column()
  entry_status: string;

  @OneToMany(
    () => EntryTeacherLoad,
    (teacherScheduleLoad) => teacherScheduleLoad.entryTeacherLoad,
  )
  entryTeacherLoad: EntryTeacherLoad[];
}
