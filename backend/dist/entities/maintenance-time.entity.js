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
exports.MaintenanceTime = void 0;
const typeorm_1 = require("typeorm");
let MaintenanceTime = class MaintenanceTime {
    id;
    maintenance_start_time;
    maintenance_end_time;
};
exports.MaintenanceTime = MaintenanceTime;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], MaintenanceTime.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaintenanceTime.prototype, "maintenance_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaintenanceTime.prototype, "maintenance_end_time", void 0);
exports.MaintenanceTime = MaintenanceTime = __decorate([
    (0, typeorm_1.Entity)()
], MaintenanceTime);
//# sourceMappingURL=maintenance-time.entity.js.map