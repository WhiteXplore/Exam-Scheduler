import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceController } from './maintenance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceYear } from 'src/entities/maintenance-year.entity';
import { MaintenanceSets } from 'src/entities/maintenance-sets.entity';
import { MaintenanceDepartment } from 'src/entities/maintenance-department.entity';
import { MaintenanceDesignation } from 'src/entities/maintenance-designation.entity';
import { MaintenanceProgram } from 'src/entities/maintenance-program.entity';
import { MaintenanceRank } from 'src/entities/maintenance-rank.entity';
import { MaintenanceSalutation } from 'src/entities/maintenance-salutation.entity';
import { MaintenanceSchoolYear } from 'src/entities/maintenance-school-year.entity';
import { MaintenanceTime } from 'src/entities/maintenance-time.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MaintenanceYear,
      MaintenanceSets,
      MaintenanceDepartment,
      MaintenanceDesignation,
      MaintenanceProgram,
      MaintenanceRank,
      MaintenanceSalutation,
      MaintenanceSchoolYear,
      MaintenanceTime,
    ]),
  ],
  controllers: [MaintenanceController],
  providers: [MaintenanceService],
})
export class MaintenanceModule {}
