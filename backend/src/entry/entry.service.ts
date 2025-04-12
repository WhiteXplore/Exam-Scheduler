import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// !DTO
import { CreateEntryRoomDto } from './dto/create-entry-room.dto';
import { CreateEntryClassDto } from './dto/create-entry-class.dto';
import { CreateEntrySubjectDto } from './dto/create-entry-subject.dto';
import { CreateEntryTeacherDto } from './dto/create-entry-teacher,dto';
import { CreateEntryInstitutesDto } from './dto/create-entry-institutes.dto';
import { CreateEntryYearDto } from './dto/create-entry-year.dto';
import { CreateEntrySetDto } from './dto/create-entry-set.dto';
import { CreateEntryDayDto } from './dto/create-entry-day.dto';
// !ENTITIES
import { EntryClass } from 'src/entities/entry-class.entity';
import { EntryRoom } from 'src/entities/entry-room.entity';
import { EntrySubject } from 'src/entities/entry-subject.entity';
import { EntryTeacher } from 'src/entities/entry-teacher.entity';
import { EntryInstitutes } from 'src/entities/entry-institutes.entity';
import { EntryYear } from 'src/entities/entry-year.entity';
import { EntrySet } from 'src/entities/entry-set.entity';
import { EntryDay } from 'src/entities/entry-day.entity';
import { EntryTeacherLoad } from 'src/entities/entry_teacher_load.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as csvParser from 'csv-parser';
@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(EntryClass)
    private readonly classRepository: Repository<EntryClass>,
    @InjectRepository(EntryRoom)
    private readonly roomRepository: Repository<EntryRoom>,
    @InjectRepository(EntrySubject)
    private readonly subjectRepository: Repository<EntrySubject>,
    @InjectRepository(EntryTeacher)
    private readonly teacherRepository: Repository<EntryTeacher>,
    @InjectRepository(EntryInstitutes)
    private readonly institutesRepository: Repository<EntryInstitutes>,
    @InjectRepository(EntryYear)
    private readonly yearRepository: Repository<EntryYear>,
    @InjectRepository(EntrySet)
    private readonly setRepository: Repository<EntrySet>,
    @InjectRepository(EntryDay)
    private readonly dayRepository: Repository<EntryDay>,
    @InjectRepository(EntryTeacherLoad)
    private readonly entryTeacherLoadRepository: Repository<EntryTeacherLoad>,
  ) {}

  // !NOTICE
  // ?ROOM SERVICE

  // ✅ FIX: Upload & Parse CSV
  async uploadCSV(filePath: string): Promise<void> {
    if (!fs.existsSync(filePath)) {
      throw new Error('File not found.');
    }

    const results: Partial<EntryRoom>[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('headers', (headers) => {
          headers.map((h) => h.replace(/^﻿/, '').trim());
        })
        .on('data', (row: Record<string, any>) => {
          const cleanRow: Record<string, any> = {};

          Object.keys(row).forEach((key) => {
            const cleanKey = key.replace(/^﻿/, '').trim();
            cleanRow[cleanKey] = row[key]?.trim() || null;
          });

          results.push({
            entry_room:
              cleanRow.entry_room || cleanRow['﻿entry_room'] || 'Unknown',
          });
        })
        .on('end', async () => {
          try {
            await this.roomRepository.save(results);
            resolve();
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  // ✅ Fix: Save Rooms Properly
  async saveRooms(data: Partial<EntryRoom>[]) {
    try {
      if (!data || data.length === 0) {
        throw new BadRequestException('No valid data to save');
      }

      return await this.roomRepository.save(data);
    } catch (error) {
      throw new InternalServerErrorException('Failed to save rooms');
    }
  }

  // Create a new room
  async createRoom(createEntryRoomDto: CreateEntryRoomDto): Promise<EntryRoom> {
    const newRoom = this.roomRepository.create(createEntryRoomDto);
    return await this.roomRepository.save(newRoom);
  }

  // Fetch all rooms
  async getAllRooms(): Promise<EntryRoom[]> {
    return await this.roomRepository.find();
  }

  // !NOTICE
  //  ?CLASS SERVICE
  // Create a new class
  async createClass(
    createEntryClassDto: CreateEntryClassDto,
  ): Promise<EntryClass> {
    const newClass = this.classRepository.create(createEntryClassDto);
    return await this.classRepository.save(newClass);
  }

  // Fetch all classes
  async getAllClasses(): Promise<EntryClass[]> {
    return await this.classRepository.find();
  }

  // Get a single class by ID
  async findOne(id: number): Promise<EntryClass> {
    const Findclass = await this.classRepository.findOne({
      where: { id },
    });
    if (!Findclass) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return Findclass;
  }

  // Delete Classes
  async remove(id: number): Promise<{ message: string }> {
    const Findclass = await this.findOne(id);
    if (!Findclass) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    await this.classRepository.remove(Findclass);
    return { message: `Class with ID ${id} deleted successfully` };
  }

  // !NOTICE
  // ?SUBJECT SERVICE
  // Create a new subject
  async createSubject(
    createSubjectRoomDto: CreateEntrySubjectDto,
  ): Promise<EntrySubject> {
    const newSubject = this.subjectRepository.create(createSubjectRoomDto);
    return await this.subjectRepository.save(newSubject);
  }

  // Fetch all subject
  async getAllSubject(): Promise<EntrySubject[]> {
    return await this.subjectRepository.find();
  }

  // !NOTICE
  // ?TEACHER SERVICE
  // Create a new teacher
  async createTeacher(
    createTeacherDto: CreateEntryTeacherDto,
  ): Promise<EntryTeacher> {
    // Create a new teacher instance
    const newTeacher = this.teacherRepository.create(createTeacherDto);
    const saveNewTeacher = await this.teacherRepository.save(newTeacher);

    // Map entry_teacher_load correctly
    const entryTeacherLoad = createTeacherDto.entry_teacher_load.map(
      (entryLoad) =>
        this.entryTeacherLoadRepository.create({
          entryTeacherLoad: saveNewTeacher, // Associate with the saved teacher
          teacher_entry_program: entryLoad.teacher_entry_program,
          teacher_entry_year: entryLoad.teacher_entry_year,
          teacher_entry_set: entryLoad.teacher_entry_set,
        }),
    );

    // Save all entry_teacher_load records
    await this.entryTeacherLoadRepository.save(entryTeacherLoad);

    return saveNewTeacher;
  }

  // Fetch all teacger
  async getAllTeachers(): Promise<EntryTeacher[]> {
    return await this.teacherRepository.find();
  }

  // !NOTICE
  // ?INSTITUTES SERVICE
  // Create a new institutes
  async createInstitutes(
    createEntryInstitutesDto: CreateEntryInstitutesDto,
  ): Promise<EntryInstitutes> {
    const newInstitutes = this.institutesRepository.create(
      createEntryInstitutesDto,
    );
    return await this.institutesRepository.save(newInstitutes);
  }

  // Fetch all institutes
  async getAllInstitutes(): Promise<EntryInstitutes[]> {
    return await this.institutesRepository.find();
  }

  // !NOTICE
  // ?YEAR SERVICE
  // Create a new year
  async createYear(createEntryYearDto: CreateEntryYearDto): Promise<EntryYear> {
    const newYear = this.yearRepository.create(createEntryYearDto);
    return await this.yearRepository.save(newYear);
  }

  // Fetch all year
  async getAllYears(): Promise<EntryYear[]> {
    return await this.yearRepository.find();
  }

  // !NOTICE
  // ?SET SERVICE
  // Create a new set
  async createSet(createEntrySetDto: CreateEntrySetDto): Promise<EntrySet> {
    const newSet = this.setRepository.create(createEntrySetDto);
    return await this.setRepository.save(newSet);
  }

  // Fetch all set
  async getAllSets(): Promise<EntrySet[]> {
    return await this.setRepository.find();
  }

  // !NOTICE
  // ?Day SERVICE
  // Create a new day
  async createDay(createDayDto: CreateEntryDayDto): Promise<EntryDay> {
    const newDay = this.dayRepository.create(createDayDto);
    return await this.dayRepository.save(newDay);
  }

  // Fetch all day
  async getAllDays(): Promise<EntryDay[]> {
    return await this.dayRepository.find();
  }
}
