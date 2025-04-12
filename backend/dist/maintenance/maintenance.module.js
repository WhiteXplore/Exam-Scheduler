"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceModule = void 0;
const common_1 = require("@nestjs/common");
const maintenance_service_1 = require("./maintenance.service");
const maintenance_controller_1 = require("./maintenance.controller");
const typeorm_1 = require("@nestjs/typeorm");
const maintenance_year_entity_1 = require("../entities/maintenance-year.entity");
const maintenance_sets_entity_1 = require("../entities/maintenance-sets.entity");
const maintenance_department_entity_1 = require("../entities/maintenance-department.entity");
const maintenance_designation_entity_1 = require("../entities/maintenance-designation.entity");
const maintenance_program_entity_1 = require("../entities/maintenance-program.entity");
const maintenance_rank_entity_1 = require("../entities/maintenance-rank.entity");
const maintenance_salutation_entity_1 = require("../entities/maintenance-salutation.entity");
const maintenance_school_year_entity_1 = require("../entities/maintenance-school-year.entity");
const maintenance_time_entity_1 = require("../entities/maintenance-time.entity");
let MaintenanceModule = class MaintenanceModule {
};
exports.MaintenanceModule = MaintenanceModule;
exports.MaintenanceModule = MaintenanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                maintenance_year_entity_1.MaintenanceYear,
                maintenance_sets_entity_1.MaintenanceSets,
                maintenance_department_entity_1.MaintenanceDepartment,
                maintenance_designation_entity_1.MaintenanceDesignation,
                maintenance_program_entity_1.MaintenanceProgram,
                maintenance_rank_entity_1.MaintenanceRank,
                maintenance_salutation_entity_1.MaintenanceSalutation,
                maintenance_school_year_entity_1.MaintenanceSchoolYear,
                maintenance_time_entity_1.MaintenanceTime,
            ]),
        ],
        controllers: [maintenance_controller_1.MaintenanceController],
        providers: [maintenance_service_1.MaintenanceService],
    })
], MaintenanceModule);
//# sourceMappingURL=maintenance.module.js.map