import { Module } from '@nestjs/common';
import { ScheduleClassService } from './schedule-class.service';
import { ScheduleClassController } from './schedule-class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleClass } from 'src/entities/schedule-class.entity';
import { TeacherClassSchedule } from 'src/entities/teacher_class_schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleClass, TeacherClassSchedule])],
  controllers: [ScheduleClassController],
  providers: [ScheduleClassService],
  exports: [TypeOrmModule], // Export TypeOrmModule if used in other modules
})
export class ScheduleClassModule {}
