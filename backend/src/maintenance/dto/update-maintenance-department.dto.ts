import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceDepartmentDto } from '../../maintenance/dto/create-maintenance-department.dto';

export class UpdateMaintenanceDepartmentDto extends PartialType(
  CreateMaintenanceDepartmentDto,
) {}
