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
exports.MaintenanceController = void 0;
const common_1 = require("@nestjs/common");
const maintenance_service_1 = require("./maintenance.service");
const create_maintenance_department_dto_1 = require("./dto/create-maintenance-department.dto");
const create_maintenance_time_dto_1 = require("./dto/create-maintenance-time.dto");
const create_maintenance_designation_dto_1 = require("./dto/create-maintenance-designation.dto");
const create_maintenance_program_dto_1 = require("./dto/create-maintenance-program.dto");
const create_maintenance_rank_dto_1 = require("./dto/create-maintenance-rank.dto");
const create_maintenance_school_year_dto_1 = require("./dto/create-maintenance-school-year.dto");
const create_maintenance_salutation_dto_1 = require("./dto/create-maintenance-salutation.dto");
let MaintenanceController = class MaintenanceController {
    maintenanceService;
    constructor(maintenanceService) {
        this.maintenanceService = maintenanceService;
    }
    async addDepartment(createDepartmentDto) {
        return this.maintenanceService.createDepartment(createDepartmentDto);
    }
    async getAllDepartments() {
        return await this.maintenanceService.getAllDepartments();
    }
    async addDesignation(createDesignationDto) {
        return this.maintenanceService.createDesignation(createDesignationDto);
    }
    async getAllDesignations() {
        return await this.maintenanceService.getAllDesignations();
    }
    async addProgram(createProgramDto) {
        return this.maintenanceService.createProgram(createProgramDto);
    }
    async getAllPrograms() {
        return await this.maintenanceService.getAllPrograms();
    }
    async addRank(createRankDto) {
        return this.maintenanceService.createRank(createRankDto);
    }
    async getAllRanks() {
        return await this.maintenanceService.getAllRanks();
    }
    async addSalutation(createSalutationDto) {
        return this.maintenanceService.createSalutation(createSalutationDto);
    }
    async getAllSalutations() {
        return await this.maintenanceService.getAllSalutations();
    }
    async addSchoolYear(createSchoolYear) {
        return this.maintenanceService.createSchoolYear(createSchoolYear);
    }
    async getAllSchoolYear() {
        return await this.maintenanceService.getAllSchoolYear();
    }
    async addTime(createTimeDto) {
        return this.maintenanceService.createTime(createTimeDto);
    }
    async getAllTime() {
        return await this.maintenanceService.getAllTime();
    }
};
exports.MaintenanceController = MaintenanceController;
__decorate([
    (0, common_1.Post)('add-department'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_department_dto_1.CreateMaintenanceDepartmentDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addDepartment", null);
__decorate([
    (0, common_1.Get)('get-department'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllDepartments", null);
__decorate([
    (0, common_1.Post)('add-designation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_designation_dto_1.CreateMaintenanceDesignationDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addDesignation", null);
__decorate([
    (0, common_1.Get)('get-designation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllDesignations", null);
__decorate([
    (0, common_1.Post)('add-program'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_program_dto_1.CreateMaintenanceProgramDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addProgram", null);
__decorate([
    (0, common_1.Get)('get-program'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllPrograms", null);
__decorate([
    (0, common_1.Post)('add-rank'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_rank_dto_1.CreateMaintenanceRankDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addRank", null);
__decorate([
    (0, common_1.Get)('get-rank'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllRanks", null);
__decorate([
    (0, common_1.Post)('add-salutation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_salutation_dto_1.CreateMaintenanceSalutationDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addSalutation", null);
__decorate([
    (0, common_1.Get)('get-salutation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllSalutations", null);
__decorate([
    (0, common_1.Post)('add-schoolYear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_school_year_dto_1.CreateMaintenanceSchoolYearDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addSchoolYear", null);
__decorate([
    (0, common_1.Get)('get-school-year'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllSchoolYear", null);
__decorate([
    (0, common_1.Post)('add-time'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maintenance_time_dto_1.CreateMaintenanceTimeDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "addTime", null);
__decorate([
    (0, common_1.Get)('get-time'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "getAllTime", null);
exports.MaintenanceController = MaintenanceController = __decorate([
    (0, common_1.Controller)('maintenance'),
    __metadata("design:paramtypes", [maintenance_service_1.MaintenanceService])
], MaintenanceController);
//# sourceMappingURL=maintenance.controller.js.map