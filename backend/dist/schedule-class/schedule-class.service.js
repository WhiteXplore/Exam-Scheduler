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
exports.ScheduleClassService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_class_entity_1 = require("../entities/schedule-class.entity");
const teacher_class_schedule_entity_1 = require("../entities/teacher_class_schedule.entity");
let ScheduleClassService = class ScheduleClassService {
    scheduleClassRepository;
    teacherClassScheduleRepository;
    constructor(scheduleClassRepository, teacherClassScheduleRepository) {
        this.scheduleClassRepository = scheduleClassRepository;
        this.teacherClassScheduleRepository = teacherClassScheduleRepository;
    }
    async createScheduleClass(dto) {
        const newSchedule = this.scheduleClassRepository.create(dto);
        const savedSchedule = await this.scheduleClassRepository.save(newSchedule);
        const teacherSchedules = dto.scheduled_class_schedule.map((schedule) => ({
            scheduledClass: savedSchedule,
            day: schedule.day,
            time: schedule.time,
        }));
        await this.teacherClassScheduleRepository.save(teacherSchedules);
        return savedSchedule;
    }
    async getAllClassSchedules() {
        return await this.scheduleClassRepository.find();
    }
    async getClassScheduleById(id) {
        return await this.scheduleClassRepository.findOne({
            where: { id },
            relations: ['teacherClassSchedules'],
        });
    }
    async getAllTeacherSchedules() {
        return await this.teacherClassScheduleRepository.find();
    }
    async getTeacherScheduleById(scheduled_class_id) {
        return await this.teacherClassScheduleRepository.find({
            where: { scheduledClass: { id: scheduled_class_id } },
            relations: ['scheduledClass'],
        });
    }
};
exports.ScheduleClassService = ScheduleClassService;
exports.ScheduleClassService = ScheduleClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(schedule_class_entity_1.ScheduleClass)),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_class_schedule_entity_1.TeacherClassSchedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ScheduleClassService);
//# sourceMappingURL=schedule-class.service.js.map