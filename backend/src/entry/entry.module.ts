import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryClass } from 'src/entities/entry-class.entity';
import { EntryRoom } from 'src/entities/entry-room.entity';
import { EntrySubject } from 'src/entities/entry-subject.entity';
import { EntryTeacher } from 'src/entities/entry-teacher.entity';
import { EntryInstitutes } from 'src/entities/entry-institutes.entity';
import { EntryYear } from 'src/entities/entry-year.entity';
import { EntrySet } from 'src/entities/entry-set.entity';
import { EntryDay } from 'src/entities/entry-day.entity';
import { EntryTeacherLoad } from 'src/entities/entry_teacher_load.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      EntryClass,
      EntryRoom,
      EntrySubject,
      EntryTeacher,
      EntryInstitutes,
      EntryYear,
      EntrySet,
      EntryDay,
      EntryTeacherLoad,
    ]),
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
