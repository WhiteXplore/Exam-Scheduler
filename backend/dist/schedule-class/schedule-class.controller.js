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
exports.ScheduleClassController = void 0;
const common_1 = require("@nestjs/common");
const schedule_class_service_1 = require("./schedule-class.service");
const create_schedule_class_dto_1 = require("./dto/create-schedule-class.dto");
let ScheduleClassController = class ScheduleClassController {
    scheduleClassService;
    constructor(scheduleClassService) {
        this.scheduleClassService = scheduleClassService;
    }
    async createSchedule(createScheduleDto) {
        return this.scheduleClassService.createScheduleClass(createScheduleDto);
    }
    async getAllClassSchedules() {
        return await this.scheduleClassService.getAllClassSchedules();
    }
    async getAllTeacherSchedules() {
        return await this.scheduleClassService.getAllTeacherSchedules();
    }
    async getClassSchedule(id) {
        return await this.scheduleClassService.getClassScheduleById(Number(id));
    }
    async getTeacherSchedule(id) {
        return await this.scheduleClassService.getTeacherScheduleById(Number(id));
    }
};
exports.ScheduleClassController = ScheduleClassController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_schedule_class_dto_1.CreateScheduleClassDto]),
    __metadata("design:returntype", Promise)
], ScheduleClassController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Get)('get-class-schedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleClassController.prototype, "getAllClassSchedules", null);
__decorate([
    (0, common_1.Get)('get-teacher-schedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleClassController.prototype, "getAllTeacherSchedules", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScheduleClassController.prototype, "getClassSchedule", null);
__decorate([
    (0, common_1.Get)('teacher/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScheduleClassController.prototype, "getTeacherSchedule", null);
exports.ScheduleClassController = ScheduleClassController = __decorate([
    (0, common_1.Controller)('schedule-class'),
    __metadata("design:paramtypes", [schedule_class_service_1.ScheduleClassService])
], ScheduleClassController);
//# sourceMappingURL=schedule-class.controller.js.map