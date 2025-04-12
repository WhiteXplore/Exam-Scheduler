<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-55 flex justify-center items-center z-50 w-screen"
  >
    <div class="rounded-xl shadow-lg fixed top-5">
      <div class="w-auto bg-white text-text1 text-[13px] rounded-md">
        <div
          class="w-[1000px] p-5 py-3 bg-[#147452] text-white rounded-t-md flex justify-between items-center"
        >
          <h1 class="font-bold tracking-wide text-lg">Add Class Scheduled</h1>
          <Icon class="cursor-pointer" @click="closeAdd" />
        </div>
        <div class="p-5 text-gray-700">
          <div class="flex flex-col gap-3">
            <div class="flex flex-row gap-3">
              <div class="flex flex-col space-y-2 flex-1">
                <label>Teacher</label>
                <select
                  v-model="form.scheduled_class_teacher"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="fetchdata in scheduleStore.entryTeacher"
                    :key="fetchdata"
                  >
                    {{ fetchdata }}
                  </option>
                </select>
              </div>

              <div class="flex flex-col space-y-2 flex-1">
                <label>Subject</label>
                <select
                  v-model="form.scheduled_class_subject"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="fetchdata in scheduleStore.entrySubjects"
                    :key="fetchdata"
                  >
                    {{ fetchdata }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex flex-row gap-3">
              <div class="flex flex-col space-y-2 flex-1">
                <label>Course, Year & Section</label>
                <select
                  v-model="form.scheduled_class_course"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="fetchdata in scheduleStore.entryClass"
                    :key="fetchdata"
                  >
                    {{ fetchdata }}
                  </option>
                </select>
              </div>

              <div class="flex flex-col space-y-2 flex-1">
                <label>Room</label>
                <select
                  v-model="form.scheduled_class_room"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="fetchdata in scheduleStore.entryRoom"
                    :key="fetchdata"
                  >
                    {{ fetchdata }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- !ADD TIME TABLE -->
          <div class="w-full border h-[500px] mt-3 rounded-xl p-3">
            <div>
              <table
                class="w-full border-collapse table-auto text-text text-[13px]"
              >
                <thead>
                  <tr class="text-gray-700 bg-gray-200">
                    <th class="px-4 py-3 text-left border-b">Time</th>
                    <th class="px-4 py-3 text-center border-b">Monday</th>
                    <th class="px-4 py-3 text-center border-b">Tuesday</th>
                    <th class="px-4 py-3 text-center border-b">Wednesday</th>
                    <th class="px-4 py-3 text-center border-b">Thursday</th>
                    <th class="px-4 py-3 text-center border-b">Friday</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(time, index) in scheduleStore.maintenanceTime"
                    :key="time.id"
                    :class="{ 'bg-green-100': (index + 1) % 2 === 0 }"
                  >
                    <td class="px-4 py-3 text-left border-b text-gray-900">
                      {{ time }}
                    </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input
                        type="checkbox"
                        class="w-4 h-4"
                        @change="toggleSchedule(time, 'Monday')"
                      />
                    </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input
                        type="checkbox"
                        class="w-4 h-4"
                        @change="toggleSchedule(time, 'Tuesday')"
                      />
                    </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input
                        type="checkbox"
                        class="w-4 h-4"
                        @change="toggleSchedule(time, 'Wednesday')"
                      />
                    </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input
                        type="checkbox"
                        class="w-4 h-4"
                        @change="toggleSchedule(time, 'Thursday')"
                      />
                    </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input
                        type="checkbox"
                        class="w-4 h-4"
                        @change="toggleSchedule(time, 'Friday')"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="flex place-items-end justify-end gap-2 mt-5">
            <button
              class="bg-red-700 hover:bg-red-600 px-5 py-2 rounded-md text-white"
              @click="closeAdd"
            >
              Close
            </button>
            <button
              class="bg-green-700 hover:bg-green-600 px-5 py-2 rounded-md text-white"
              @click="submitData"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isScheduledExised"><scheduledExist /></div>
</template>

<script>
import axios from "axios";
import Icon from "@/assets/icons/icon.vue";
import { useScheduleStore } from "@/PiniaStore/entry-schedule";
import { onMounted, reactive, ref } from "vue";
import scheduledExist from "../alert/scheduledExist.vue";

export default {
  name: "AddStudentsPage",
  components: { Icon, scheduledExist },
  setup(_, { emit }) {
    const scheduleStore = useScheduleStore();
    const isOpen = ref(true);
    const isScheduledExised = ref(false); // Controls the alert component
    const existingSchedules = ref([]); // Store fetched class schedules

    const form = reactive({
      scheduled_class_teacher: "",
      scheduled_class_subject: "",
      scheduled_class_course: "",
      scheduled_class_room: "",
      scheduled_class_schedule: [], // Selected time slots
    });

    // Close Modal
    const closeAdd = () => {
      isOpen.value = false;
      emit("close");
    };

    // Fetch existing scheduled classes
    const fetchScheduledClasses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/schedule-class/get-class-schedule"
        );
        existingSchedules.value = response.data;
      } catch (error) {
        console.error("Error fetching class schedules:", error);
      }
    };

    // Check if schedule already exists
    const isDuplicateSchedule = () => {
      return existingSchedules.value.some((entry) => {
        return (
          entry.scheduled_class_subject === form.scheduled_class_subject &&
          entry.scheduled_class_course === form.scheduled_class_course &&
          entry.scheduled_class_room === form.scheduled_class_room &&
          form.scheduled_class_schedule.some((slot) =>
            entry.scheduled_class_schedule.some(
              (e) => e.time === slot.time && e.day === slot.day
            )
          )
        );
      });
    };

    // Add or Remove Time Slot
    const toggleSchedule = (time, day) => {
      const index = form.scheduled_class_schedule.findIndex(
        (entry) => entry.time === time && entry.day === day
      );

      if (index === -1) {
        form.scheduled_class_schedule.push({ time, day });
      } else {
        form.scheduled_class_schedule.splice(index, 1);
      }
    };

    // Submit Data
    const submitData = async () => {
      if (isDuplicateSchedule()) {
        isScheduledExised.value = true; // Show the alert component
        return;
      }

      try {
        await axios.post("http://localhost:8000/schedule-class/add", form);
        closeAdd();
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };

    onMounted(() => {
      scheduleStore.fetchEntrySubjects();
      scheduleStore.fetchEntryTeacher();
      scheduleStore.fetchEntryClass();
      scheduleStore.fetchEntryRoom();
      scheduleStore.fetchMaintenanceTime();
      fetchScheduledClasses();
    });

    return {
      isOpen,
      isScheduledExised,
      form,
      scheduleStore,
      closeAdd,
      toggleSchedule,
      submitData,
    };
  },
};
</script>
