import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceRankDto } from './create-maintenance-rank.dto';

export class UpdateMaintenanceRankDto extends PartialType(CreateMaintenanceRankDto) {}
