import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryRoomDto } from './create-entry-room.dto';

export class UpdateEntryRoomDto extends PartialType(CreateEntryRoomDto) {}
