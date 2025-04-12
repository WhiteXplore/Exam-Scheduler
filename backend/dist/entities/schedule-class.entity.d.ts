import { TeacherClassSchedule } from './teacher_class_schedule.entity';
export declare class ScheduleClass {
    id: number;
    scheduled_class_teacher: string;
    scheduled_class_subject: string;
    scheduled_class_course: string;
    scheduled_class_room: string;
    scheduled_class_schedule: {
        time: string;
        day: string;
    }[];
    teacherClassSchedules: TeacherClassSchedule[];
}
