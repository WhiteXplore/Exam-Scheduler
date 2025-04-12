import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
// !DTO
import { CreateMaintenanceDepartmentDto } from './dto/create-maintenance-department.dto';
import { CreateMaintenanceTimeDto } from './dto/create-maintenance-time.dto';
import { CreateMaintenanceDesignationDto } from './dto/create-maintenance-designation.dto';
import { CreateMaintenanceProgramDto } from './dto/create-maintenance-program.dto';
import { CreateMaintenanceRankDto } from './dto/create-maintenance-rank.dto';
import { CreateMaintenanceSchoolYearDto } from './dto/create-maintenance-school-year.dto';
import { CreateMaintenanceYearDto } from './dto/create-maintenance-year.dto';
import { CreateMaintenanceSetDto } from './dto/create-maintenance-set.dto';
import { CreateMaintenanceSalutationDto } from './dto/create-maintenance-salutation.dto';

// !ENTITIES
import { MaintenanceDepartment } from 'src/entities/maintenance-department.entity';
import { MaintenanceDesignation } from 'src/entities/maintenance-designation.entity';
import { MaintenanceProgram } from 'src/entities/maintenance-program.entity';
import { MaintenanceRank } from 'src/entities/maintenance-rank.entity';
import { MaintenanceSalutation } from 'src/entities/maintenance-salutation.entity';
import { MaintenanceSchoolYear } from 'src/entities/maintenance-school-year.entity';
import { MaintenanceSets } from 'src/entities/maintenance-sets.entity';
import { MaintenanceTime } from 'src/entities/maintenance-time.entity';
import { MaintenanceYear } from 'src/entities/maintenance-year.entity';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  // !NOTICE
  // ?DEPARTMENT CONTROLLER
  @Post('add-department')
  async addDepartment(
    @Body() createDepartmentDto: CreateMaintenanceDepartmentDto,
  ): Promise<MaintenanceDepartment> {
    return this.maintenanceService.createDepartment(createDepartmentDto);
  }

  @Get('get-department')
  async getAllDepartments(): Promise<MaintenanceDepartment[]> {
    return await this.maintenanceService.getAllDepartments();
  }

  // !NOTICE
  // ?DESIGNATION CONTROLLER

  @Post('add-designation')
  async addDesignation(
    @Body() createDesignationDto: CreateMaintenanceDesignationDto,
  ): Promise<MaintenanceDesignation> {
    return this.maintenanceService.createDesignation(createDesignationDto);
  }

  @Get('get-designation')
  async getAllDesignations(): Promise<MaintenanceDesignation[]> {
    return await this.maintenanceService.getAllDesignations();
  }
  // !NOTICE
  // ?PROGRAM CONTROLLER

  @Post('add-program')
  async addProgram(
    @Body() createProgramDto: CreateMaintenanceProgramDto,
  ): Promise<MaintenanceProgram> {
    return this.maintenanceService.createProgram(createProgramDto);
  }

  @Get('get-program')
  async getAllPrograms(): Promise<MaintenanceProgram[]> {
    return await this.maintenanceService.getAllPrograms();
  }

  // !NOTICE
  // ?RANK CONTROLLER

  @Post('add-rank')
  async addRank(
    @Body() createRankDto: CreateMaintenanceRankDto,
  ): Promise<MaintenanceRank> {
    return this.maintenanceService.createRank(createRankDto);
  }

  @Get('get-rank')
  async getAllRanks(): Promise<MaintenanceRank[]> {
    return await this.maintenanceService.getAllRanks();
  }

  // !NOTICE
  // ?SALUTATION CONTROLLER
  @Post('add-salutation')
  async addSalutation(
    @Body() createSalutationDto: CreateMaintenanceSalutationDto,
  ): Promise<MaintenanceSalutation> {
    return this.maintenanceService.createSalutation(createSalutationDto);
  }

  @Get('get-salutation')
  async getAllSalutations(): Promise<MaintenanceSalutation[]> {
    return await this.maintenanceService.getAllSalutations();
  }

  // !NOTICE
  // ?SCHOOL YEAR CONTROLLER
  @Post('add-schoolYear')
  async addSchoolYear(
    @Body() createSchoolYear: CreateMaintenanceSchoolYearDto,
  ): Promise<MaintenanceSchoolYear> {
    return this.maintenanceService.createSchoolYear(createSchoolYear);
  }

  @Get('get-school-year')
  async getAllSchoolYear(): Promise<MaintenanceSchoolYear[]> {
    return await this.maintenanceService.getAllSchoolYear();
  }

  // !NOTICE
  // ?TIME CONTROLLER
  @Post('add-time')
  async addTime(
    @Body() createTimeDto: CreateMaintenanceTimeDto,
  ): Promise<MaintenanceTime> {
    return this.maintenanceService.createTime(createTimeDto);
  }

  @Get('get-time')
  async getAllTime(): Promise<MaintenanceTime[]> {
    return await this.maintenanceService.getAllTime();
  }
}
