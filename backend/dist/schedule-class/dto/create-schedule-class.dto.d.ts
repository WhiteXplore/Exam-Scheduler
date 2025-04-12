declare class ScheduleEntry {
    time: string;
    day: string;
}
export declare class CreateScheduleClassDto {
    scheduled_class_teacher: string;
    scheduled_class_subject: string;
    scheduled_class_course: string;
    scheduled_class_room: string;
    scheduled_class_schedule: ScheduleEntry[];
}
export {};
