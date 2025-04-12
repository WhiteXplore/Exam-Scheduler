import { defineStore } from "pinia";

export const entryStore = defineStore("EntryStore", {
  state: () => ({
    availableEntrySalutation: ["Jr", "Sr."],
    availableEntryDepartment: ["Department 01", "Department 02"],
    availableEntryDesignation: ["Designation 01", "Designation 02"],
    availableEntryRank: ["Rank 01", "Rank 02"],
    availableEntryStatus: ["Status 01", "Status 02"],

    ids: {
      classIDs: [],
      roomIDs: [],
      selectedRoom: null,
      selectedClass: null,
    },
  }),
  getters: {
    getEntrySalutation: (state) => state.availableEntrySalutation,
    getEntryDepartment: (state) => state.availableEntryDepartment,
    getEntryDesignation: (state) => state.availableEntryDesignation,
    getEntryRank: (state) => state.availableEntryRank,
    getEntryStatus: (state) => state.availableEntryStatus,
  },
  actions: {
    setID(key, values) {
      if (this.ids[key] !== undefined) {
        this.ids[key] = values;
      } else {
        console.warn(`Key '${key}' does not exist in ids object`);
      }
    },
    setSelectedRoom(roomID) {
      this.ids.selectedRoom = roomID;
    },
    setSelectedClass(classID) {
      this.ids.selectedClass = classID;
    },
  },
});
