import { defineStore } from "pinia";
import axios from "axios";

export const useScheduleStore = defineStore("scheduleStore", {
  state: () => ({
    entrySubjects: [],
    entryTeacher: [],
    entryClass: [],
    entryRoom: [],
    maintenanceTime: [],
    selectedClassSchedule: null,
    classScheduled: [],
  }),

  actions: {
    setItem(item) {
      this.selectedClassSchedule = item;
    },
    setClassSchedule(classScheduled) {
      this.selectedClassSchedule = classScheduled; // You can set selected student here
    },
    setClassSchedules(classScheduleds) {
      this.classScheduled = classScheduleds; // Store the full list of students
    },
    async fetchEntryTeacher() {
      try {
        const response = await axios.get(
          "http://localhost:8000/entry-teacher/get-teacher"
        );

        this.entryTeacher = response.data.map(
          (item) =>
            `${item.entry_last_name} , ${
              item.entry_first_name ? item.entry_first_name + " " : ""
            }${item.entry_middle_name}`
        );
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    },

    async fetchEntrySubjects() {
      try {
        const response = await axios.get(
          "http://localhost:8000/entry-subject/get-subject"
        );

        this.entrySubjects = response.data.map((item) => item.entry_subject);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    },

    async fetchEntryClass() {
      try {
        const response = await axios.get(
          "http://localhost:8000/entry-class/get-class"
        );

        this.entryClass = response.data.map((item) => item.entry_class);
      } catch (error) {
        console.error("Error fetching class:", error);
      }
    },

    async fetchEntryRoom() {
      try {
        const response = await axios.get(
          "http://localhost:8000/entry-room/get-room"
        );

        this.entryRoom = response.data.map((item) => item.entry_room);
      } catch (error) {
        console.error("Error fetching room:", error);
      }
    },

    async fetchMaintenanceTime() {
      try {
        const response = await axios.get(
          "http://localhost:8000/maintenance-time/get-time"
        );

        this.maintenanceTime = response.data.map(
          (item) =>
            `${item.maintenance_start_time} - ${item.maintenance_end_time}`
        );
      } catch (error) {
        console.error("Error fetching room:", error);
      }
    },
  },
});
