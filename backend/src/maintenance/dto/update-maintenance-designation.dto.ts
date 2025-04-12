import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceDesignationDto } from './create-maintenance-designation.dto';

export class UpdateMaintenanceDesignationDto extends PartialType(
  CreateMaintenanceDesignationDto,
) {}
