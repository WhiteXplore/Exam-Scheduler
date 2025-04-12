"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModule = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
const entry_controller_1 = require("./entry.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entry_class_entity_1 = require("../entities/entry-class.entity");
const entry_room_entity_1 = require("../entities/entry-room.entity");
const entry_subject_entity_1 = require("../entities/entry-subject.entity");
const entry_teacher_entity_1 = require("../entities/entry-teacher.entity");
const entry_institutes_entity_1 = require("../entities/entry-institutes.entity");
const entry_year_entity_1 = require("../entities/entry-year.entity");
const entry_set_entity_1 = require("../entities/entry-set.entity");
const entry_day_entity_1 = require("../entities/entry-day.entity");
const entry_teacher_load_entity_1 = require("../entities/entry_teacher_load.entity");
let EntryModule = class EntryModule {
};
exports.EntryModule = EntryModule;
exports.EntryModule = EntryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entry_class_entity_1.EntryClass,
                entry_room_entity_1.EntryRoom,
                entry_subject_entity_1.EntrySubject,
                entry_teacher_entity_1.EntryTeacher,
                entry_institutes_entity_1.EntryInstitutes,
                entry_year_entity_1.EntryYear,
                entry_set_entity_1.EntrySet,
                entry_day_entity_1.EntryDay,
                entry_teacher_load_entity_1.EntryTeacherLoad,
            ]),
        ],
        controllers: [entry_controller_1.EntryController],
        providers: [entry_service_1.EntryService],
    })
], EntryModule);
//# sourceMappingURL=entry.module.js.map