import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleClassModule } from './schedule-class/schedule-class.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ScheduleModule } from './schedule/schedule.module';
// ENTRY MODULES
import { EntryModule } from './entry/entry.module';
// MAINTENANCE MODULES

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'admin12345..',
      database: 'exam_scheduler_data',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'your-secret-key', // Store this securely
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    ScheduleClassModule,
    MaintenanceModule,
    ScheduleModule,
    EntryModule,
  ],
})
export class AppModule {}
