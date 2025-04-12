import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ScheduleClass } from './schedule-class.entity';

@Entity('teacher_class_schedule')
export class TeacherClassSchedule {
  @PrimaryGeneratedColumn('increment')
  id: number; // Changed from teacher_id

  @ManyToOne(
    () => ScheduleClass,
    (scheduleClass) => scheduleClass.teacherClassSchedules,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'scheduled_class_id' })
  scheduledClass: ScheduleClass;

  @Column()
  day: string; // Example: 'Monday', 'Tuesday'

  @Column()
  time: string; // Example: '08:00 AM - 09:00 AM'
}
