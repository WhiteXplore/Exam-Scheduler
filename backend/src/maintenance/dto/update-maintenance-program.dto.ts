import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceProgramDto } from './create-maintenance-program.dto';

export class UpdateMaintenanceProgramDto extends PartialType(CreateMaintenanceProgramDto) {}
