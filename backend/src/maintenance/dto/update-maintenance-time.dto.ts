import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceTimeDto } from './create-maintenance-time.dto';

export class UpdateMaintenanceTimeDto extends PartialType(CreateMaintenanceTimeDto) {}
