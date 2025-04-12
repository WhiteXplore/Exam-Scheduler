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
exports.EntryTeacher = void 0;
const typeorm_1 = require("typeorm");
const entry_teacher_load_entity_1 = require("./entry_teacher_load.entity");
let EntryTeacher = class EntryTeacher {
    id;
    entry_salutation;
    entry_first_name;
    entry_middle_name;
    entry_last_name;
    entry_rank;
    entry_department;
    entry_designation;
    entry_status;
    entryTeacherLoad;
};
exports.EntryTeacher = EntryTeacher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EntryTeacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_salutation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_middle_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_rank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_designation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacher.prototype, "entry_status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entry_teacher_load_entity_1.EntryTeacherLoad, (teacherScheduleLoad) => teacherScheduleLoad.entryTeacherLoad),
    __metadata("design:type", Array)
], EntryTeacher.prototype, "entryTeacherLoad", void 0);
exports.EntryTeacher = EntryTeacher = __decorate([
    (0, typeorm_1.Entity)()
], EntryTeacher);
//# sourceMappingURL=entry-teacher.entity.js.map