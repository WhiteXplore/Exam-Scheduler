"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceRankDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_maintenance_rank_dto_1 = require("./create-maintenance-rank.dto");
class UpdateMaintenanceRankDto extends (0, mapped_types_1.PartialType)(create_maintenance_rank_dto_1.CreateMaintenanceRankDto) {
}
exports.UpdateMaintenanceRankDto = UpdateMaintenanceRankDto;
//# sourceMappingURL=update-maintenance-rank.dto.js.map