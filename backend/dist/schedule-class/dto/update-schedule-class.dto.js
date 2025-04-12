"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScheduleClassDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_schedule_class_dto_1 = require("./create-schedule-class.dto");
class UpdateScheduleClassDto extends (0, mapped_types_1.PartialType)(create_schedule_class_dto_1.CreateScheduleClassDto) {
}
exports.UpdateScheduleClassDto = UpdateScheduleClassDto;
//# sourceMappingURL=update-schedule-class.dto.js.map