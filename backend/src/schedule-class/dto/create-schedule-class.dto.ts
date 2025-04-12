import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ScheduleEntry {
  @IsString()
  time: string;

  @IsString()
  day: string;
}

export class CreateScheduleClassDto {
  @IsString()
  scheduled_class_teacher: string;

  @IsString()
  scheduled_class_subject: string;

  @IsString()
  scheduled_class_course: string;

  @IsString()
  scheduled_class_room: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScheduleEntry)
  scheduled_class_schedule: ScheduleEntry[];
}
