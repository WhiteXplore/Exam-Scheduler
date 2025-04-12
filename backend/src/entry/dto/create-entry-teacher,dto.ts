import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class EntryTeacherLoad {
  @IsString()
  teacher_entry_program: string;

  @IsString()
  teacher_entry_year: string;

  @IsString()
  teacher_entry_set: string;
}

export class CreateEntryTeacherDto {
  entry_salutation: string;

  entry_first_name: string;

  entry_middle_name: string;

  entry_last_name: string;

  entry_rank: string;

  entry_department: string;

  entry_designation: string;

  entry_status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EntryTeacherLoad)
  entry_teacher_load: EntryTeacherLoad[];
}
