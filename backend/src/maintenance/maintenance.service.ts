import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectRepository(MaintenanceDepartment)
    private readonly departmentRepository: Repository<MaintenanceDepartment>,
    @InjectRepository(MaintenanceDesignation)
    private readonly designationRepository: Repository<MaintenanceDesignation>,
    @InjectRepository(MaintenanceProgram)
    private readonly programRepository: Repository<MaintenanceProgram>,
    @InjectRepository(MaintenanceRank)
    private readonly rankRepository: Repository<MaintenanceRank>,
    @InjectRepository(MaintenanceSalutation)
    private readonly salutationRepository: Repository<MaintenanceSalutation>,
    @InjectRepository(MaintenanceSchoolYear)
    private readonly schoolYearRepository: Repository<MaintenanceSchoolYear>,
    @InjectRepository(MaintenanceTime)
    private readonly timeRepository: Repository<MaintenanceTime>,
  ) {}

  // !NOTICE
  // ?DEPARTMENT SERVICE
  // Create a new department
  async createDepartment(
    createMaintenanceDepartmentDto: CreateMaintenanceDepartmentDto,
  ): Promise<MaintenanceDepartment> {
    const newDepartment = this.departmentRepository.create(
      createMaintenanceDepartmentDto,
    );
    return await this.departmentRepository.save(newDepartment);
  }

  // Fetch all department
  async getAllDepartments(): Promise<MaintenanceDepartment[]> {
    return await this.departmentRepository.find();
  }

  // !NOTICE
  // ?DSIGNATION SERVICE
  // Create a new designation
  async createDesignation(
    createMaintenanceDesignationDto: CreateMaintenanceDesignationDto,
  ): Promise<MaintenanceDesignation> {
    const newDesignation = this.designationRepository.create(
      createMaintenanceDesignationDto,
    );
    return await this.designationRepository.save(newDesignation);
  }

  // Fetch all designation
  async getAllDesignations(): Promise<MaintenanceDesignation[]> {
    return await this.designationRepository.find();
  }

  // !NOTICE
  // ?PROGRAM SERVICE
  // Create a new Programs
  async createProgram(
    createMaintenaceProgrammDto: CreateMaintenanceProgramDto,
  ): Promise<MaintenanceProgram> {
    const newProgram = this.programRepository.create(
      createMaintenaceProgrammDto,
    );
    return await this.programRepository.save(newProgram);
  }

  // Fetch all programs
  async getAllPrograms(): Promise<MaintenanceProgram[]> {
    return await this.programRepository.find();
  }

  // !NOTICE
  // ?RANK SERVICE
  // Create a new rank
  async createRank(
    createMaintenanceRankDto: CreateMaintenanceRankDto,
  ): Promise<MaintenanceRank> {
    const newRank = this.rankRepository.create(createMaintenanceRankDto);
    return await this.rankRepository.save(newRank);
  }

  // Fetch all rank
  async getAllRanks(): Promise<MaintenanceRank[]> {
    return await this.rankRepository.find();
  }

  // !NOTICE
  // ?SALUTATION SERVICE
  // Create a new salutation
  async createSalutation(
    createMaintenanceSalutationDto: CreateMaintenanceSalutationDto,
  ): Promise<MaintenanceSalutation> {
    const newSalutation = this.salutationRepository.create(
      createMaintenanceSalutationDto,
    );
    return await this.salutationRepository.save(newSalutation);
  }

  // Fetch all salutation
  async getAllSalutations(): Promise<MaintenanceSalutation[]> {
    return await this.salutationRepository.find();
  }

  // !NOTICE
  // ?SCHOOL YEAR SERVICE
  // Create a new school year
  async createSchoolYear(
    createMaintenanceSchoolYearDto: CreateMaintenanceSchoolYearDto,
  ): Promise<MaintenanceSchoolYear> {
    const newSchoolYear = this.schoolYearRepository.create(
      createMaintenanceSchoolYearDto,
    );
    return await this.schoolYearRepository.save(newSchoolYear);
  }

  // Fetch all School Year
  async getAllSchoolYear(): Promise<MaintenanceSchoolYear[]> {
    return await this.schoolYearRepository.find();
  }

  // !NOTICE
  // ?TIME SERVICE
  // Create a new time
  async createTime(
    createMaintenanceTimeDto: CreateMaintenanceTimeDto,
  ): Promise<MaintenanceTime> {
    const newTime = this.timeRepository.create(createMaintenanceTimeDto);
    return await this.timeRepository.save(newTime);
  }

  // Fetch all time
  async getAllTime(): Promise<MaintenanceTime[]> {
    return await this.timeRepository.find();
  }
}
