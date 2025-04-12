<template>
  <div class="p-2 h-[760px] overflow-y-scroll custom-scrollbar font-arial">
    <div class="flex gap-2 justify-end mr-[300px]">
      <div class="mb-2">
        <button
          @click="$router.push('/admin/class-schedule')"
          class="p-2 bg-gray-300 rounded"
        >
          Back
        </button>
      </div>

      <div>
        <button
          @click="printSchedule"
          class="p-2 bg-blue-500 text-white rounded"
        >
          Print
        </button>
      </div>
    </div>

    <div
      id="print-section"
      class="bg-white rounded-lg w-[8.5in] h-[13in] mx-auto m-0 flex flex-col"
    >
      <div v-if="classSchedule" class="w-full h-full flex flex-col">
        <!-- Header -->
        <div class="w-full h-[150px] flex-shrink-0">
          <img
            src="../../../../assets/img/dnsc-header.jpg"
            alt="DNSC Header"
            class="w-full object-cover-fit"
          />
        </div>

        <!-- MAIN CONTENT -->
        <div class="flex-1 text-center">
          <h1 class="font-semibold">Class Schedule</h1>
          <div
            class="text-[12px] flex flex-row justify-center gap-10 px-20 mt-2"
          >
            <p>
              Subject:
              <span class="font-semibold text-green-900">
                {{ classSchedule.scheduled_class_subject }}</span
              >
            </p>
            <p>
              School Year:
              <span class="font-semibold text-green-900">
                {{ classSchedule.scheduled_class_course }}</span
              >
            </p>
            <p>
              Room:
              <span class="font-semibold text-green-900"
                >{{ classSchedule.scheduled_class_room }}
              </span>
            </p>
          </div>
          <div class="overflow-x-auto p-4">
            <table
              class="min-w-full border-collapse border border-gray-300 rounded-t-md overflow-hidden"
            >
              <thead>
                <tr class="bg-green-800 text-white text-[12px]">
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Time
                  </th>
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Monday
                  </th>
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Tuesday
                  </th>
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Wednesday
                  </th>
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Thursday
                  </th>
                  <th class="border border-gray-300 px-6 py-3 text-left">
                    Friday
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(timeSlot, index) in timeSlots"
                  :key="index"
                  class="even:bg-gray-100 hover:bg-gray-200 text-[12px]"
                >
                  <td class="border border-gray-300 px-6 py-3">
                    {{ timeSlot.time }}
                  </td>
                  <td
                    v-for="day in [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ]"
                    :key="day"
                    class="border border-gray-300 px-6 py-3 text-center"
                  >
                    {{ timeSlot.day === day ? "Scheduled" : "-" }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Footer -->
        <div class="w-full h-[100px] flex-shrink-0">
          <img
            src="../../../../assets/img/dnsc-footer.jpg"
            alt="DNSC Footer"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      classSchedule: null,
      timeSlots: [],
    };
  },

  async created() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(
        `http://localhost:8000/schedule-class/${id}`
      );
      this.classSchedule = response.data;
    } catch (error) {
      console.error("Error fetching class schedule:", error);
    }
  },

  methods: {
    async fetchTeacherData() {
      const teacher_id = this.$route.params.id;
      try {
        const response = await axios.get(
          `http://localhost:8000/schedule-class/teacher/${teacher_id}`
        );
        this.timeSlots = response.data;
      } catch (error) {
        console.error("Error fetching teacher's class schedule:", error);
      }
    },
    printSchedule() {
      const printContent = document.getElementById("print-section").innerHTML;
      const originalContent = document.body.innerHTML;

      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Reload to restore Vue state
    },
  },
  mounted() {
    this.fetchTeacherData();
  },
};
</script>

<style></style>
