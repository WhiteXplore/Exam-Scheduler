import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleClass } from 'src/entities/schedule-class.entity';
import { TeacherClassSchedule } from 'src/entities/teacher_class_schedule.entity';
import { CreateScheduleClassDto } from './dto/create-schedule-class.dto';

@Injectable()
export class ScheduleClassService {
  constructor(
    @InjectRepository(ScheduleClass)
    private readonly scheduleClassRepository: Repository<ScheduleClass>,

    @InjectRepository(TeacherClassSchedule)
    private readonly teacherClassScheduleRepository: Repository<TeacherClassSchedule>,
  ) {}

  async createScheduleClass(
    dto: CreateScheduleClassDto,
  ): Promise<ScheduleClass> {
    // Step 1: Create a ScheduleClass Entry
    const newSchedule = this.scheduleClassRepository.create(dto);
    const savedSchedule = await this.scheduleClassRepository.save(newSchedule);

    // Step 2: Save Each Time Slot as a Separate Row
    const teacherSchedules = dto.scheduled_class_schedule.map((schedule) => ({
      scheduledClass: savedSchedule,
      day: schedule.day,
      time: schedule.time,
    }));

    await this.teacherClassScheduleRepository.save(teacherSchedules);

    return savedSchedule;
  }

  // !Fetch all class schedule
  async getAllClassSchedules(): Promise<ScheduleClass[]> {
    return await this.scheduleClassRepository.find();
  }

  async getClassScheduleById(id: number): Promise<ScheduleClass | null> {
    return await this.scheduleClassRepository.findOne({
      where: { id },
      relations: ['teacherClassSchedules'], // Updated relation name
    });
  }

  // !Fetch all class schedule
  async getAllTeacherSchedules(): Promise<TeacherClassSchedule[]> {
    return await this.teacherClassScheduleRepository.find();
  }

  async getTeacherScheduleById(
    scheduled_class_id: number, // Use scheduled class ID instead of teacher ID
  ): Promise<TeacherClassSchedule[] | null> {
    // Return an array since a teacher may have multiple schedules
    return await this.teacherClassScheduleRepository.find({
      where: { scheduledClass: { id: scheduled_class_id } }, // Corrected filter
      relations: ['scheduledClass'], // Correct relation name
    });
  }
}
