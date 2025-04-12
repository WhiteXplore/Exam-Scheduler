<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen"
  >
    <div class="rounded-xl shadow-lg fixed top-40">
      <div class="w-auto bg-white text-text1 text-[13px] rounded-md">
        <div
          class="w-full p-5 py-3 bg-[#147452] text-white rounded-t-md flex justify-between items-center"
        >
          <h1 class="font-bold tracking-wide text-lg">Add Time Schedule</h1>
          <Icon class="cursor-pointer" @click="closeAdd" />
        </div>
        <div class="p-5 text-gray-700">
          <div class="flex flex-col gap-3">
            <div class="flex flex-col space-y-2">
              <label>Start Time</label>
              <input
                v-model="form.maintenance_start_time"
                type="time"
                class="px-3 py-3 border w-[300px] border-gray-300 rounded-md text-gray-700"
              />
            </div>

            <div class="flex flex-col space-y-2">
              <label>End Time</label>
              <input
                v-model="form.maintenance_end_time"
                type="time"
                class="px-3 py-3 border w-[300px] border-gray-300 rounded-md text-gray-700"
              />
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
</template>

<script>
import axios from "axios";
import Icon from "@/assets/icons/icon.vue";

export default {
  name: "AddStudentsPage",
  components: {
    Icon,
  },
  data() {
    return {
      isOpen: true,
      isSuccessfulAdd: false,
      form: {
        maintenance_start_time: "",
        maintenance_end_time: "",
      },
    };
  },

  methods: {
    closeAdd() {
      this.isOpen = false;
      this.isSuccessfulAdd = false;
      this.$emit("close");
    },
    formatTimeTo12Hour(time) {
      if (!time) return "";
      const [hours, minutes] = time.split(":");
      const hour = parseInt(hours, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM case
      return `${formattedHour}:${minutes} ${ampm}`;
    },
    async submitData() {
      try {
        const formattedData = {
          maintenance_start_time: this.formatTimeTo12Hour(
            this.form.maintenance_start_time
          ),
          maintenance_end_time: this.formatTimeTo12Hour(
            this.form.maintenance_end_time
          ),
        };

        const response = await axios.post(
          "http://localhost:8000/maintenance/add-time",
          formattedData
        );

        console.log("API Response:", response.data);
        this.isSuccessfulAdd = true;
        this.isOpen = false;
      } catch (error) {
        console.error("Submission failed:", error.response?.data || error);
      }
    },
  },
};
</script>
