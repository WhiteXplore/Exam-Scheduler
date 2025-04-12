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
exports.EntryController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const entry_service_1 = require("./entry.service");
const create_entry_class_dto_1 = require("./dto/create-entry-class.dto");
const create_entry_room_dto_1 = require("./dto/create-entry-room.dto");
const create_entry_subject_dto_1 = require("./dto/create-entry-subject.dto");
const create_entry_teacher_dto_1 = require("./dto/create-entry-teacher,dto");
const create_entry_institutes_dto_1 = require("./dto/create-entry-institutes.dto");
const create_entry_year_dto_1 = require("./dto/create-entry-year.dto");
const create_entry_day_dto_1 = require("./dto/create-entry-day.dto");
const create_entry_set_dto_1 = require("./dto/create-entry-set.dto");
let EntryController = class EntryController {
    entryService;
    constructor(entryService) {
        this.entryService = entryService;
    }
    async addRoom(createRoomDto) {
        return this.entryService.createRoom(createRoomDto);
    }
    async getAllRooms() {
        return await this.entryService.getAllRooms();
    }
    async uploadCSV(file) {
        if (!file) {
            console.error('❌ No file uploaded!');
            throw new Error('File upload failed.');
        }
        const filePath = path.resolve(file.path);
        console.log('📂 CSV File Path:', filePath);
        return this.entryService.uploadCSV(filePath);
    }
    async addClass(createClassDto) {
        return this.entryService.createClass(createClassDto);
    }
    async getAllClasses() {
        return await this.entryService.getAllClasses();
    }
    async remove(id) {
        return this.entryService.remove(+id);
    }
    async addSubject(createSubjectDto) {
        return this.entryService.createSubject(createSubjectDto);
    }
    async getAllSubject() {
        return await this.entryService.getAllSubject();
    }
    async addTeacher(createTeacherDto) {
        return this.entryService.createTeacher(createTeacherDto);
    }
    async getAllTeachers() {
        return await this.entryService.getAllTeachers();
    }
    async addInstitutes(createInstitutesDto) {
        return this.entryService.createInstitutes(createInstitutesDto);
    }
    async getAllInstitutes() {
        return await this.entryService.getAllInstitutes();
    }
    async addYears(createYearDto) {
        return this.entryService.createYear(createYearDto);
    }
    async getAllYears() {
        return await this.entryService.getAllYears();
    }
    async addSets(createSetDto) {
        return this.entryService.createSet(createSetDto);
    }
    async getAllSets() {
        return await this.entryService.getAllSets();
    }
    async addDay(createDayDto) {
        return this.entryService.createDay(createDayDto);
    }
    async getAllDays() {
        return await this.entryService.getAllDays();
    }
};
exports.EntryController = EntryController;
__decorate([
    (0, common_1.Post)('add-room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_room_dto_1.CreateEntryRoomDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addRoom", null);
__decorate([
    (0, common_1.Get)('get-room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                callback(null, `${uniqueSuffix}-${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "uploadCSV", null);
__decorate([
    (0, common_1.Post)('add-class'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_class_dto_1.CreateEntryClassDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addClass", null);
__decorate([
    (0, common_1.Get)('get-class'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllClasses", null);
__decorate([
    (0, common_1.Delete)('class/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('add-subject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_subject_dto_1.CreateEntrySubjectDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addSubject", null);
__decorate([
    (0, common_1.Get)('get-subject'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllSubject", null);
__decorate([
    (0, common_1.Post)('add-teacher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_teacher_dto_1.CreateEntryTeacherDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addTeacher", null);
__decorate([
    (0, common_1.Get)('get-teacher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllTeachers", null);
__decorate([
    (0, common_1.Post)('add-institutes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_institutes_dto_1.CreateEntryInstitutesDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addInstitutes", null);
__decorate([
    (0, common_1.Get)('get-institutes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllInstitutes", null);
__decorate([
    (0, common_1.Post)('add-year'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_year_dto_1.CreateEntryYearDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addYears", null);
__decorate([
    (0, common_1.Get)('get-year'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllYears", null);
__decorate([
    (0, common_1.Post)('add-set'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_set_dto_1.CreateEntrySetDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addSets", null);
__decorate([
    (0, common_1.Get)('get-set'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllSets", null);
__decorate([
    (0, common_1.Post)('add-day'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_day_dto_1.CreateEntryDayDto]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addDay", null);
__decorate([
    (0, common_1.Get)('get-day'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getAllDays", null);
exports.EntryController = EntryController = __decorate([
    (0, common_1.Controller)('entry'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
//# sourceMappingURL=entry.controller.js.map