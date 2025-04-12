"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const maintenance_department_entity_1 = require("../entities/maintenance-department.entity");
const maintenance_designation_entity_1 = require("../entities/maintenance-designation.entity");
const maintenance_program_entity_1 = require("../entities/maintenance-program.entity");
const maintenance_rank_entity_1 = require("../entities/maintenance-rank.entity");
const maintenance_salutation_entity_1 = require("../entities/maintenance-salutation.entity");
const maintenance_school_year_entity_1 = require("../entities/maintenance-school-year.entity");
const maintenance_time_entity_1 = require("../entities/maintenance-time.entity");
let MaintenanceService = class MaintenanceService {
    departmentRepository;
    designationRepository;
    programRepository;
    rankRepository;
    salutationRepository;
    schoolYearRepository;
    timeRepository;
    constructor(departmentRepository, designationRepository, programRepository, rankRepository, salutationRepository, schoolYearRepository, timeRepository) {
        this.departmentRepository = departmentRepository;
        this.designationRepository = designationRepository;
        this.programRepository = programRepository;
        this.rankRepository = rankRepository;
        this.salutationRepository = salutationRepository;
        this.schoolYearRepository = schoolYearRepository;
        this.timeRepository = timeRepository;
    }
    async createDepartment(createMaintenanceDepartmentDto) {
        const newDepartment = this.departmentRepository.create(createMaintenanceDepartmentDto);
        return await this.departmentRepository.save(newDepartment);
    }
    async getAllDepartments() {
        return await this.departmentRepository.find();
    }
    async createDesignation(createMaintenanceDesignationDto) {
        const newDesignation = this.designationRepository.create(createMaintenanceDesignationDto);
        return await this.designationRepository.save(newDesignation);
    }
    async getAllDesignations() {
        return await this.designationRepository.find();
    }
    async createProgram(createMaintenaceProgrammDto) {
        const newProgram = this.programRepository.create(createMaintenaceProgrammDto);
        return await this.programRepository.save(newProgram);
    }
    async getAllPrograms() {
        return await this.programRepository.find();
    }
    async createRank(createMaintenanceRankDto) {
        const newRank = this.rankRepository.create(createMaintenanceRankDto);
        return await this.rankRepository.save(newRank);
    }
    async getAllRanks() {
        return await this.rankRepository.find();
    }
    async createSalutation(createMaintenanceSalutationDto) {
        const newSalutation = this.salutationRepository.create(createMaintenanceSalutationDto);
        return await this.salutationRepository.save(newSalutation);
    }
    async getAllSalutations() {
        return await this.salutationRepository.find();
    }
    async createSchoolYear(createMaintenanceSchoolYearDto) {
        const newSchoolYear = this.schoolYearRepository.create(createMaintenanceSchoolYearDto);
        return await this.schoolYearRepository.save(newSchoolYear);
    }
    async getAllSchoolYear() {
        return await this.schoolYearRepository.find();
    }
    async createTime(createMaintenanceTimeDto) {
        const newTime = this.timeRepository.create(createMaintenanceTimeDto);
        return await this.timeRepository.save(newTime);
    }
    async getAllTime() {
        return await this.timeRepository.find();
    }
};
exports.MaintenanceService = MaintenanceService;
exports.MaintenanceService = MaintenanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(maintenance_department_entity_1.MaintenanceDepartment)),
    __param(1, (0, typeorm_1.InjectRepository)(maintenance_designation_entity_1.MaintenanceDesignation)),
    __param(2, (0, typeorm_1.InjectRepository)(maintenance_program_entity_1.MaintenanceProgram)),
    __param(3, (0, typeorm_1.InjectRepository)(maintenance_rank_entity_1.MaintenanceRank)),
    __param(4, (0, typeorm_1.InjectRepository)(maintenance_salutation_entity_1.MaintenanceSalutation)),
    __param(5, (0, typeorm_1.InjectRepository)(maintenance_school_year_entity_1.MaintenanceSchoolYear)),
    __param(6, (0, typeorm_1.InjectRepository)(maintenance_time_entity_1.MaintenanceTime)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MaintenanceService);
//# sourceMappingURL=maintenance.service.js.map