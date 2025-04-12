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
exports.CreateScheduleClassDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ScheduleEntry {
    time;
    day;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleEntry.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleEntry.prototype, "day", void 0);
class CreateScheduleClassDto {
    scheduled_class_teacher;
    scheduled_class_subject;
    scheduled_class_course;
    scheduled_class_room;
    scheduled_class_schedule;
}
exports.CreateScheduleClassDto = CreateScheduleClassDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleClassDto.prototype, "scheduled_class_teacher", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleClassDto.prototype, "scheduled_class_subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleClassDto.prototype, "scheduled_class_course", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleClassDto.prototype, "scheduled_class_room", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScheduleEntry),
    __metadata("design:type", Array)
], CreateScheduleClassDto.prototype, "scheduled_class_schedule", void 0);
//# sourceMappingURL=create-schedule-class.dto.js.map