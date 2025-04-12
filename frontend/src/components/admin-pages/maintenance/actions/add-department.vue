<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen"
  >
    <div class="rounded-xl shadow-lg">
      <div class="w-auto bg-white text-text1 text-[13px] rounded-md">
        <div
          class="w-[500px] p-5 py-3 bg-[#147452] text-white rounded-t-md flex justify-between items-center"
        >
          <h1 class="font-bold tracking-wide text-lg">Add Department</h1>
          <Icon class="cursor-pointer" @click="closeAdd" />
        </div>
        <div class="p-5 text-gray-700">
          <div class="flex flex-col gap-3">
            <div class="flex flex-col space-y-2">
              <label>Department Code</label>
              <input
                v-model="form.maintenance_department_code"
                type="text"
                class="px-3 py-4 border w-full border-gray-300 rounded-md text-gray-700"
                placeholder="Enter department code"
              />
            </div>

            <div class="flex flex-col space-y-2">
              <label>Department Name</label>
              <input
                v-model="form.maintenance_department"
                type="text"
                class="px-3 py-4 border w-full border-gray-300 rounded-md text-gray-700"
                placeholder="Enter department name"
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
  name: "AddDepartmentPage",
  components: {
    Icon,
  },
  data() {
    return {
      isOpen: true,
      isSuccessfulAdd: false,
      form: {
        maintenance_department_code: "",
        maintenance_department: "",
      },
    };
  },

  methods: {
    closeAdd() {
      this.isOpen = false;
      this.isSuccessfulAdd = false;
      this.$emit("close");
    },
    async submitData() {
      try {
        const response = await axios.post(
          "http://localhost:8000/maintenance/add-department",
          this.form
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
