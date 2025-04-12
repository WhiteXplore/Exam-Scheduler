import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryClassDto } from './create-entry-class.dto';

export class UpdateEntryClassDto extends PartialType(CreateEntryClassDto) {}
