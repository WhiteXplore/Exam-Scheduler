"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntryClassDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entry_class_dto_1 = require("./create-entry-class.dto");
class UpdateEntryClassDto extends (0, mapped_types_1.PartialType)(create_entry_class_dto_1.CreateEntryClassDto) {
}
exports.UpdateEntryClassDto = UpdateEntryClassDto;
//# sourceMappingURL=update-entry-class.dto.js.map