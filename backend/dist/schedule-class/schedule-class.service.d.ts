import { Repository } from 'typeorm';
import { ScheduleClass } from 'src/entities/schedule-class.entity';
import { TeacherClassSchedule } from 'src/entities/teacher_class_schedule.entity';
import { CreateScheduleClassDto } from './dto/create-schedule-class.dto';
export declare class ScheduleClassService {
    private readonly scheduleClassRepository;
    private readonly teacherClassScheduleRepository;
    constructor(scheduleClassRepository: Repository<ScheduleClass>, teacherClassScheduleRepository: Repository<TeacherClassSchedule>);
    createScheduleClass(dto: CreateScheduleClassDto): Promise<ScheduleClass>;
    getAllClassSchedules(): Promise<ScheduleClass[]>;
    getClassScheduleById(id: number): Promise<ScheduleClass | null>;
    getAllTeacherSchedules(): Promise<TeacherClassSchedule[]>;
    getTeacherScheduleById(scheduled_class_id: number): Promise<TeacherClassSchedule[] | null>;
}
