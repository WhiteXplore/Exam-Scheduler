import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceSchoolYearDto } from './create-maintenance-school-year.dto';

export class UpdateMaintenanceSchoolYearDto extends PartialType(CreateMaintenanceSchoolYearDto) {}
