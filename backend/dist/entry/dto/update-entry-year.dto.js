"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntryYearDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entry_year_dto_1 = require("./create-entry-year.dto");
class UpdateEntryYearDto extends (0, mapped_types_1.PartialType)(create_entry_year_dto_1.CreateEntryYearDto) {
}
exports.UpdateEntryYearDto = UpdateEntryYearDto;
//# sourceMappingURL=update-entry-year.dto.js.map