import { ScheduleClassService } from './schedule-class.service';
import { CreateScheduleClassDto } from './dto/create-schedule-class.dto';
import { ScheduleClass } from 'src/entities/schedule-class.entity';
import { TeacherClassSchedule } from 'src/entities/teacher_class_schedule.entity';
export declare class ScheduleClassController {
    private readonly scheduleClassService;
    constructor(scheduleClassService: ScheduleClassService);
    createSchedule(createScheduleDto: CreateScheduleClassDto): Promise<ScheduleClass>;
    getAllClassSchedules(): Promise<ScheduleClass[]>;
    getAllTeacherSchedules(): Promise<TeacherClassSchedule[]>;
    getClassSchedule(id: string): Promise<ScheduleClass | null>;
    getTeacherSchedule(id: string): Promise<TeacherClassSchedule[] | null>;
}
