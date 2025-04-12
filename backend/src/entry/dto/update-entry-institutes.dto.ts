import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryInstitutesDto } from './create-entry-institutes.dto';

export class UpdateEntryInstitutesDto extends PartialType(
  CreateEntryInstitutesDto,
) {}
