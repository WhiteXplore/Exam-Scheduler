import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryTeacherDto } from './create-entry-teacher,dto';

export class UpdateEntryTeacherDto extends PartialType(CreateEntryTeacherDto) {}
