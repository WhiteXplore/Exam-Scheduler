import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScheduleClassService } from './schedule-class.service';
import { CreateScheduleClassDto } from './dto/create-schedule-class.dto';
import { UpdateScheduleClassDto } from './dto/update-schedule-class.dto';
import { ScheduleClass } from 'src/entities/schedule-class.entity';
import { TeacherClassSchedule } from 'src/entities/teacher_class_schedule.entity';
@Controller('schedule-class')
export class ScheduleClassController {
  constructor(private readonly scheduleClassService: ScheduleClassService) {}
  @Post('add')
  async createSchedule(@Body() createScheduleDto: CreateScheduleClassDto) {
    return this.scheduleClassService.createScheduleClass(createScheduleDto);
  }

  @Get('get-class-schedule')
  async getAllClassSchedules(): Promise<ScheduleClass[]> {
    return await this.scheduleClassService.getAllClassSchedules();
  }

  @Get('get-teacher-schedule')
  async getAllTeacherSchedules(): Promise<TeacherClassSchedule[]> {
    return await this.scheduleClassService.getAllTeacherSchedules();
  }

  @Get(':id')
  async getClassSchedule(
    @Param('id') id: string,
  ): Promise<ScheduleClass | null> {
    return await this.scheduleClassService.getClassScheduleById(Number(id));
  }

  @Get('teacher/:id')
  async getTeacherSchedule(
    @Param('id') id: string,
  ): Promise<TeacherClassSchedule[] | null> {
    // Return an array
    return await this.scheduleClassService.getTeacherScheduleById(Number(id));
  }
}
