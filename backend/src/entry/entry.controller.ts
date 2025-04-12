import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

import * as path from 'path';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { EntryService } from './entry.service';
// !DTO
import { CreateEntryClassDto } from './dto/create-entry-class.dto';
import { CreateEntryRoomDto } from './dto/create-entry-room.dto';
import { CreateEntrySubjectDto } from './dto/create-entry-subject.dto';
import { CreateEntryTeacherDto } from './dto/create-entry-teacher,dto';
import { CreateEntryInstitutesDto } from './dto/create-entry-institutes.dto';
import { CreateEntryYearDto } from './dto/create-entry-year.dto';
import { CreateEntryDayDto } from './dto/create-entry-day.dto';
// !ENTITIES
import { EntryRoom } from 'src/entities/entry-room.entity';
import { EntryClass } from 'src/entities/entry-class.entity';
import { EntrySubject } from 'src/entities/entry-subject.entity';
import { EntryTeacher } from 'src/entities/entry-teacher.entity';
import { EntryInstitutes } from 'src/entities/entry-institutes.entity';
import { EntryYear } from 'src/entities/entry-year.entity';
import { CreateEntrySetDto } from './dto/create-entry-set.dto';
import { EntrySet } from 'src/entities/entry-set.entity';
import { EntryDay } from 'src/entities/entry-day.entity';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  // !NOTICE
  // ?ROOM CONTROLLER

  @Post('add-room')
  async addRoom(@Body() createRoomDto: CreateEntryRoomDto): Promise<EntryRoom> {
    return this.entryService.createRoom(createRoomDto);
  }

  @Get('get-room')
  async getAllRooms(): Promise<EntryRoom[]> {
    return await this.entryService.getAllRooms();
  }
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Save uploaded CSV files to "uploads" folder
        filename: (req, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          callback(null, `${uniqueSuffix}-${file.originalname}`);
        },
      }),
    }),
  )
  async uploadCSV(@UploadedFile() file: Express.Multer.File): Promise<any> {
    if (!file) {
      console.error('❌ No file uploaded!');
      throw new Error('File upload failed.');
    }

    const filePath = path.resolve(file.path); // ✅ Ensure file path is absolute
    console.log('📂 CSV File Path:', filePath); // Debugging

    return this.entryService.uploadCSV(filePath);
  }

  // !NOTICE
  // ?CLASS CONTROLLER

  @Post('add-class')
  async addClass(
    @Body() createClassDto: CreateEntryClassDto,
  ): Promise<EntryClass> {
    return this.entryService.createClass(createClassDto);
  }

  @Get('get-class')
  async getAllClasses(): Promise<EntryClass[]> {
    return await this.entryService.getAllClasses();
  }

  @Delete('class/:id')
  async remove(@Param('id') id: string) {
    return this.entryService.remove(+id);
  }

  // !NOTICE
  // ?SUBJECT CONTROLLER
  @Post('add-subject')
  async addSubject(
    @Body() createSubjectDto: CreateEntrySubjectDto,
  ): Promise<EntrySubject> {
    return this.entryService.createSubject(createSubjectDto);
  }

  @Get('get-subject')
  async getAllSubject(): Promise<EntrySubject[]> {
    return await this.entryService.getAllSubject();
  }

  // !NOTICE
  // ?TEACHER CONTROLLER
  @Post('add-teacher')
  async addTeacher(
    @Body() createTeacherDto: CreateEntryTeacherDto,
  ): Promise<EntryTeacher> {
    return this.entryService.createTeacher(createTeacherDto);
  }

  @Get('get-teacher')
  async getAllTeachers(): Promise<EntryTeacher[]> {
    return await this.entryService.getAllTeachers();
  }

  // !NOTICE
  // ?INSTITUTES CONTROLLER
  @Post('add-institutes')
  async addInstitutes(
    @Body() createInstitutesDto: CreateEntryInstitutesDto,
  ): Promise<EntryInstitutes> {
    return this.entryService.createInstitutes(createInstitutesDto);
  }

  @Get('get-institutes')
  async getAllInstitutes(): Promise<EntryInstitutes[]> {
    return await this.entryService.getAllInstitutes();
  }

  // !NOTICE
  // ?Year CONTOLLER
  @Post('add-year')
  async addYears(
    @Body() createYearDto: CreateEntryYearDto,
  ): Promise<EntryYear> {
    return this.entryService.createYear(createYearDto);
  }

  @Get('get-year')
  async getAllYears(): Promise<EntryYear[]> {
    return await this.entryService.getAllYears();
  }

  // !NOTICE
  // ?Year CONTOLLER

  @Post('add-set')
  async addSets(@Body() createSetDto: CreateEntrySetDto): Promise<EntrySet> {
    return this.entryService.createSet(createSetDto);
  }

  @Get('get-set')
  async getAllSets(): Promise<EntrySet[]> {
    return await this.entryService.getAllSets();
  }

  // !NOTICE
  // ?DAY CONTOLLER
  @Post('add-day')
  async addDay(@Body() createDayDto: CreateEntryDayDto): Promise<EntryDay> {
    return this.entryService.createDay(createDayDto);
  }

  @Get('get-day')
  async getAllDays(): Promise<EntryDay[]> {
    return await this.entryService.getAllDays();
  }
}
