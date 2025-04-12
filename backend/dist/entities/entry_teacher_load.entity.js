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
exports.EntryTeacherLoad = void 0;
const typeorm_1 = require("typeorm");
const entry_teacher_entity_1 = require("./entry-teacher.entity");
let EntryTeacherLoad = class EntryTeacherLoad {
    id;
    entryTeacherLoad;
    teacher_entry_program;
    teacher_entry_year;
    teacher_entry_set;
};
exports.EntryTeacherLoad = EntryTeacherLoad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EntryTeacherLoad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entry_teacher_entity_1.EntryTeacher, (entryTeacherLoad) => entryTeacherLoad.entryTeacherLoad, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'entryLoad_class_id' }),
    __metadata("design:type", entry_teacher_entity_1.EntryTeacher)
], EntryTeacherLoad.prototype, "entryTeacherLoad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_program", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EntryTeacherLoad.prototype, "teacher_entry_set", void 0);
exports.EntryTeacherLoad = EntryTeacherLoad = __decorate([
    (0, typeorm_1.Entity)()
], EntryTeacherLoad);
//# sourceMappingURL=entry_teacher_load.entity.js.map