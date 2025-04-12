"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceTimeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_maintenance_time_dto_1 = require("./create-maintenance-time.dto");
class UpdateMaintenanceTimeDto extends (0, mapped_types_1.PartialType)(create_maintenance_time_dto_1.CreateMaintenanceTimeDto) {
}
exports.UpdateMaintenanceTimeDto = UpdateMaintenanceTimeDto;
//# sourceMappingURL=update-maintenance-time.dto.js.map