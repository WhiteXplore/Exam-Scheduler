import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceSalutationDto } from './create-maintenance-salutation.dto';

export class UpdateMaintenanceSalutationDto extends PartialType(CreateMaintenanceSalutationDto) {}
