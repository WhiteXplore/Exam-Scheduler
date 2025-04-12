import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrySetDto } from './create-entry-set.dto';

export class UpdateEntryYearDto extends PartialType(CreateEntrySetDto) {}
