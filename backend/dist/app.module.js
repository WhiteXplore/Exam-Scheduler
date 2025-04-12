"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const schedule_class_module_1 = require("./schedule-class/schedule-class.module");
const maintenance_module_1 = require("./maintenance/maintenance.module");
const schedule_module_1 = require("./schedule/schedule.module");
const entry_module_1 = require("./entry/entry.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'admin12345..',
                database: 'exam_scheduler_data',
                entities: [__dirname + '/entities/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '1h' },
            }),
            auth_module_1.AuthModule,
            schedule_class_module_1.ScheduleClassModule,
            maintenance_module_1.MaintenanceModule,
            schedule_module_1.ScheduleModule,
            entry_module_1.EntryModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map