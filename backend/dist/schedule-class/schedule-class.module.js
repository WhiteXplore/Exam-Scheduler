"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleClassModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_class_service_1 = require("./schedule-class.service");
const schedule_class_controller_1 = require("./schedule-class.controller");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_class_entity_1 = require("../entities/schedule-class.entity");
const teacher_class_schedule_entity_1 = require("../entities/teacher_class_schedule.entity");
let ScheduleClassModule = class ScheduleClassModule {
};
exports.ScheduleClassModule = ScheduleClassModule;
exports.ScheduleClassModule = ScheduleClassModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([schedule_class_entity_1.ScheduleClass, teacher_class_schedule_entity_1.TeacherClassSchedule])],
        controllers: [schedule_class_controller_1.ScheduleClassController],
        providers: [schedule_class_service_1.ScheduleClassService],
        exports: [typeorm_1.TypeOrmModule],
    })
], ScheduleClassModule);
//# sourceMappingURL=schedule-class.module.js.map