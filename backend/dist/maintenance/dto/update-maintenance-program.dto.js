"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceProgramDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_maintenance_program_dto_1 = require("./create-maintenance-program.dto");
class UpdateMaintenanceProgramDto extends (0, mapped_types_1.PartialType)(create_maintenance_program_dto_1.CreateMaintenanceProgramDto) {
}
exports.UpdateMaintenanceProgramDto = UpdateMaintenanceProgramDto;
//# sourceMappingURL=update-maintenance-program.dto.js.map