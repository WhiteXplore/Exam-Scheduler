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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherClassSchedule = void 0;
const typeorm_1 = require("typeorm");
const schedule_class_entity_1 = require("./schedule-class.entity");
let TeacherClassSchedule = class TeacherClassSchedule {
    id;
    scheduledClass;
    day;
    time;
};
exports.TeacherClassSchedule = TeacherClassSchedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TeacherClassSchedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_class_entity_1.ScheduleClass, (scheduleClass) => scheduleClass.teacherClassSchedules, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'scheduled_class_id' }),
    __metadata("design:type", schedule_class_entity_1.ScheduleClass)
], TeacherClassSchedule.prototype, "scheduledClass", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherClassSchedule.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherClassSchedule.prototype, "time", void 0);
exports.TeacherClassSchedule = TeacherClassSchedule = __decorate([
    (0, typeorm_1.Entity)('teacher_class_schedule')
], TeacherClassSchedule);
//# sourceMappingURL=teacher_class_schedule.entity.js.map