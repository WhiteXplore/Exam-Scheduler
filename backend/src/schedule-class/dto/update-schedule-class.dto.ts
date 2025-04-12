import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleClassDto } from './create-schedule-class.dto';

export class UpdateScheduleClassDto extends PartialType(CreateScheduleClassDto) {}
