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
exports.EntryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entry_class_entity_1 = require("../entities/entry-class.entity");
const entry_room_entity_1 = require("../entities/entry-room.entity");
const entry_subject_entity_1 = require("../entities/entry-subject.entity");
const entry_teacher_entity_1 = require("../entities/entry-teacher.entity");
const entry_institutes_entity_1 = require("../entities/entry-institutes.entity");
const entry_year_entity_1 = require("../entities/entry-year.entity");
const entry_set_entity_1 = require("../entities/entry-set.entity");
const entry_day_entity_1 = require("../entities/entry-day.entity");
const entry_teacher_load_entity_1 = require("../entities/entry_teacher_load.entity");
const fs = require("fs");
const csvParser = require("csv-parser");
let EntryService = class EntryService {
    classRepository;
    roomRepository;
    subjectRepository;
    teacherRepository;
    institutesRepository;
    yearRepository;
    setRepository;
    dayRepository;
    entryTeacherLoadRepository;
    constructor(classRepository, roomRepository, subjectRepository, teacherRepository, institutesRepository, yearRepository, setRepository, dayRepository, entryTeacherLoadRepository) {
        this.classRepository = classRepository;
        this.roomRepository = roomRepository;
        this.subjectRepository = subjectRepository;
        this.teacherRepository = teacherRepository;
        this.institutesRepository = institutesRepository;
        this.yearRepository = yearRepository;
        this.setRepository = setRepository;
        this.dayRepository = dayRepository;
        this.entryTeacherLoadRepository = entryTeacherLoadRepository;
    }
    async uploadCSV(filePath) {
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found.');
        }
        const results = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('headers', (headers) => {
                headers.map((h) => h.replace(/^﻿/, '').trim());
            })
                .on('data', (row) => {
                const cleanRow = {};
                Object.keys(row).forEach((key) => {
                    const cleanKey = key.replace(/^﻿/, '').trim();
                    cleanRow[cleanKey] = row[key]?.trim() || null;
                });
                results.push({
                    entry_room: cleanRow.entry_room || cleanRow['﻿entry_room'] || 'Unknown',
                });
            })
                .on('end', async () => {
                try {
                    await this.roomRepository.save(results);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            })
                .on('error', (error) => {
                reject(error);
            });
        });
    }
    async saveRooms(data) {
        try {
            if (!data || data.length === 0) {
                throw new common_1.BadRequestException('No valid data to save');
            }
            return await this.roomRepository.save(data);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to save rooms');
        }
    }
    async createRoom(createEntryRoomDto) {
        const newRoom = this.roomRepository.create(createEntryRoomDto);
        return await this.roomRepository.save(newRoom);
    }
    async getAllRooms() {
        return await this.roomRepository.find();
    }
    async createClass(createEntryClassDto) {
        const newClass = this.classRepository.create(createEntryClassDto);
        return await this.classRepository.save(newClass);
    }
    async getAllClasses() {
        return await this.classRepository.find();
    }
    async findOne(id) {
        const Findclass = await this.classRepository.findOne({
            where: { id },
        });
        if (!Findclass) {
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        }
        return Findclass;
    }
    async remove(id) {
        const Findclass = await this.findOne(id);
        if (!Findclass) {
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        }
        await this.classRepository.remove(Findclass);
        return { message: `Class with ID ${id} deleted successfully` };
    }
    async createSubject(createSubjectRoomDto) {
        const newSubject = this.subjectRepository.create(createSubjectRoomDto);
        return await this.subjectRepository.save(newSubject);
    }
    async getAllSubject() {
        return await this.subjectRepository.find();
    }
    async createTeacher(createTeacherDto) {
        const newTeacher = this.teacherRepository.create(createTeacherDto);
        const saveNewTeacher = await this.teacherRepository.save(newTeacher);
        const entryTeacherLoad = createTeacherDto.entry_teacher_load.map((entryLoad) => this.entryTeacherLoadRepository.create({
            entryTeacherLoad: saveNewTeacher,
            teacher_entry_program: entryLoad.teacher_entry_program,
            teacher_entry_year: entryLoad.teacher_entry_year,
            teacher_entry_set: entryLoad.teacher_entry_set,
        }));
        await this.entryTeacherLoadRepository.save(entryTeacherLoad);
        return saveNewTeacher;
    }
    async getAllTeachers() {
        return await this.teacherRepository.find();
    }
    async createInstitutes(createEntryInstitutesDto) {
        const newInstitutes = this.institutesRepository.create(createEntryInstitutesDto);
        return await this.institutesRepository.save(newInstitutes);
    }
    async getAllInstitutes() {
        return await this.institutesRepository.find();
    }
    async createYear(createEntryYearDto) {
        const newYear = this.yearRepository.create(createEntryYearDto);
        return await this.yearRepository.save(newYear);
    }
    async getAllYears() {
        return await this.yearRepository.find();
    }
    async createSet(createEntrySetDto) {
        const newSet = this.setRepository.create(createEntrySetDto);
        return await this.setRepository.save(newSet);
    }
    async getAllSets() {
        return await this.setRepository.find();
    }
    async createDay(createDayDto) {
        const newDay = this.dayRepository.create(createDayDto);
        return await this.dayRepository.save(newDay);
    }
    async getAllDays() {
        return await this.dayRepository.find();
    }
};
exports.EntryService = EntryService;
exports.EntryService = EntryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entry_class_entity_1.EntryClass)),
    __param(1, (0, typeorm_1.InjectRepository)(entry_room_entity_1.EntryRoom)),
    __param(2, (0, typeorm_1.InjectRepository)(entry_subject_entity_1.EntrySubject)),
    __param(3, (0, typeorm_1.InjectRepository)(entry_teacher_entity_1.EntryTeacher)),
    __param(4, (0, typeorm_1.InjectRepository)(entry_institutes_entity_1.EntryInstitutes)),
    __param(5, (0, typeorm_1.InjectRepository)(entry_year_entity_1.EntryYear)),
    __param(6, (0, typeorm_1.InjectRepository)(entry_set_entity_1.EntrySet)),
    __param(7, (0, typeorm_1.InjectRepository)(entry_day_entity_1.EntryDay)),
    __param(8, (0, typeorm_1.InjectRepository)(entry_teacher_load_entity_1.EntryTeacherLoad)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EntryService);
//# sourceMappingURL=entry.service.js.map