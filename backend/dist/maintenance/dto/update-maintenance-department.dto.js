"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceDepartmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_maintenance_department_dto_1 = require("../../maintenance/dto/create-maintenance-department.dto");
class UpdateMaintenanceDepartmentDto extends (0, mapped_types_1.PartialType)(create_maintenance_department_dto_1.CreateMaintenanceDepartmentDto) {
}
exports.UpdateMaintenanceDepartmentDto = UpdateMaintenanceDepartmentDto;
//# sourceMappingURL=update-maintenance-department.dto.js.map