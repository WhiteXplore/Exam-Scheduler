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
exports.ScheduleClass = void 0;
const typeorm_1 = require("typeorm");
const teacher_class_schedule_entity_1 = require("./teacher_class_schedule.entity");
let ScheduleClass = class ScheduleClass {
    id;
    scheduled_class_teacher;
    scheduled_class_subject;
    scheduled_class_course;
    scheduled_class_room;
    scheduled_class_schedule;
    teacherClassSchedules;
};
exports.ScheduleClass = ScheduleClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ScheduleClass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScheduleClass.prototype, "scheduled_class_teacher", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScheduleClass.prototype, "scheduled_class_subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScheduleClass.prototype, "scheduled_class_course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScheduleClass.prototype, "scheduled_class_room", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], ScheduleClass.prototype, "scheduled_class_schedule", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => teacher_class_schedule_entity_1.TeacherClassSchedule, (teacherSchedule) => teacherSchedule.scheduledClass),
    __metadata("design:type", Array)
], ScheduleClass.prototype, "teacherClassSchedules", void 0);
exports.ScheduleClass = ScheduleClass = __decorate([
    (0, typeorm_1.Entity)()
], ScheduleClass);
//# sourceMappingURL=schedule-class.entity.js.map