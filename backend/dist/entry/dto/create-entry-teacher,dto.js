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
exports.CreateEntryTeacherDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class EntryTeacherLoad {
    teacher_entry_program;
    teacher_entry_year;
    teacher_entry_set;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_program", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_set", void 0);
class CreateEntryTeacherDto {
    entry_salutation;
    entry_first_name;
    entry_middle_name;
    entry_last_name;
    entry_rank;
    entry_department;
    entry_designation;
    entry_status;
    entry_teacher_load;
}
exports.CreateEntryTeacherDto = CreateEntryTeacherDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => EntryTeacherLoad),
    __metadata("design:type", Array)
], CreateEntryTeacherDto.prototype, "entry_teacher_load", void 0);
//# sourceMappingURL=create-entry-teacher,dto.js.map