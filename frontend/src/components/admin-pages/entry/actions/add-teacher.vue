<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen"
  >
    <div class="rounded-xl shadow-lg">
      <div class="w-auto bg-white text-text1 text-[13px] rounded-md">
        <div
          class="w-full p-5 py-3 bg-[#147452] text-white rounded-t-md flex justify-between items-center"
        >
          <h1 class="font-bold tracking-wide text-lg">Add Teacher</h1>
          <Icon class="cursor-pointer" @click="closeAdd" />
        </div>
        <div class="p-5 text-gray-700">
          <div class="flex flex-col gap-4">
            <!-- !ROW 01  -->
            <div class="flex gap-3">
              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">First Name</label>
                <input
                  v-model="form.entry_first_name"
                  type="text"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                  placeholder="Enter first name"
                />
              </div>

              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Midlle Name</label>
                <input
                  v-model="form.entry_middle_name"
                  type="text"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                  placeholder="Enter middle name"
                />
              </div>

              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Last Name</label>
                <input
                  v-model="form.entry_last_name"
                  type="text"
                  class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
                  placeholder="Enter last name"
                />
              </div>

              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Salutation :</label>
                <select
                  v-model="form.entry_salutation"
                  name="entry_salutation"
                  id="entry_salutation"
                  class="px-3 py-3 right-10 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="(
                      entry_salutation, index
                    ) in availableEntrySalutation"
                    :key="index"
                    :value="entry_salutation"
                  >
                    {{ entry_salutation }}
                  </option>
                </select>
              </div>
            </div>

            <!-- !ROW 02 -->
            <div class="flex gap-3">
              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Rank :</label>
                <select
                  v-model="form.entry_rank"
                  name="entry_rank"
                  id="entry_rank"
                  class="px-3 py-3 right-10 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="(entry_rank, index) in availableEntryRank"
                    :key="index"
                    :value="entry_rank"
                  >
                    {{ entry_rank }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Department :</label>
                <select
                  v-model="form.entry_department"
                  name="entry_department"
                  id="entry_department"
                  class="px-3 py-3 right-10 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="(
                      entry_department, index
                    ) in availableEntryDepartment"
                    :key="index"
                    :value="entry_department"
                  >
                    {{ entry_department }}
                  </option>
                </select>
              </div>
            </div>

            <!-- !ROW 03  -->
            <div class="flex gap-3">
              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Designation :</label>
                <select
                  v-model="form.entry_designation"
                  name="entry_designation"
                  id="entry_designation"
                  class="px-3 py-3 right-10 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="(
                      entry_designation, index
                    ) in availableEntryDesignation"
                    :key="index"
                    :value="entry_designation"
                  >
                    {{ entry_designation }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col space-y-2 flex-1">
                <label class="font-semibold">Status :</label>
                <select
                  v-model="form.entry_status"
                  name="entry_status"
                  id="entry_status"
                  class="px-3 py-3 right-10 border w-full border-gray-300 rounded-md text-gray-700"
                >
                  <option value="">Select</option>
                  <option
                    v-for="(entry_status, index) in availableEntryStatus"
                    :key="index"
                    :value="entry_status"
                  >
                    {{ entry_status }}
                  </option>
                </select>
              </div>
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
import { entryStore } from "@/PiniaStore/entry-store";
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
        entry_salutation: "",
        entry_first_name: "",
        entry_middle_name: "",
        entry_last_name: "",
        entry_rank: "",
        entry_department: "",
        entry_designation: "",
        entry_status: "",
      },
    };
  },
  setup() {
    const EntryStore = entryStore();
    return {
      availableEntrySalutation: EntryStore.getEntrySalutation,
      availableEntryDepartment: EntryStore.getEntryDepartment,
      availableEntryDesignation: EntryStore.getEntryDesignation,
      availableEntryRank: EntryStore.getEntryRank,
      availableEntryStatus: EntryStore.getEntryStatus,
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
          "http://localhost:8000/entry/add-teacher",
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
