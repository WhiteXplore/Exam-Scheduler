import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TeacherClassSchedule } from './teacher_class_schedule.entity';

@Entity()
export class ScheduleClass {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  scheduled_class_teacher: string;

  @Column()
  scheduled_class_subject: string;

  @Column()
  scheduled_class_course: string;

  @Column()
  scheduled_class_room: string;

  @Column('json')
  scheduled_class_schedule: { time: string; day: string }[];

  @OneToMany(
    () => TeacherClassSchedule,
    (teacherSchedule) => teacherSchedule.scheduledClass,
  )
  teacherClassSchedules: TeacherClassSchedule[]; // Changed from teacherSchedules
}
