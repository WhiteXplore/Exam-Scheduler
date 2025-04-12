"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntryRoomDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entry_room_dto_1 = require("./create-entry-room.dto");
class UpdateEntryRoomDto extends (0, mapped_types_1.PartialType)(create_entry_room_dto_1.CreateEntryRoomDto) {
}
exports.UpdateEntryRoomDto = UpdateEntryRoomDto;
//# sourceMappingURL=update-entry-room.dto.js.map