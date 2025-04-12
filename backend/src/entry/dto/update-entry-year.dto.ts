import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryYearDto } from './create-entry-year.dto';

export class UpdateEntryYearDto extends PartialType(CreateEntryYearDto) {}
