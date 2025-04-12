declare class EntryTeacherLoad {
    teacher_entry_program: string;
    teacher_entry_year: string;
    teacher_entry_set: string;
}
export declare class CreateEntryTeacherDto {
    entry_salutation: string;
    entry_first_name: string;
    entry_middle_name: string;
    entry_last_name: string;
    entry_rank: string;
    entry_department: string;
    entry_designation: string;
    entry_status: string;
    entry_teacher_load: EntryTeacherLoad[];
}
export {};
