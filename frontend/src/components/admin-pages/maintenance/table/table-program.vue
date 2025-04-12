<template>
  <div>
    <div class="text-sm flex justify-between">
      <div class="text-[13px] text-text mt-4 font-regular">
        Pages / Maintenance / Program
      </div>
      <button
        class="flex gap-1 items-center bg-Green text-white hover:text-green-700 p-3 py-2 rounded-md hover:bg-green-300 hover:shadow-lg"
        @click="toggleAddProgramOpen"
      >
        <icon name="add-students"></icon>Add Program
      </button>
    </div>

    <div class="text-[14px] bg-white">
      <div class="mt-4 overflow-x-auto border p-2 rounded-xl">
        <div class="text-gray-700 flex justify-between items-center">
          <div class="flex items-center">
            <select
              v-model="itemsPerPage"
              class="px-1 py-1 border rounded-md"
              @change="changePage(1)"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <span class="ml-2">Per page</span>
          </div>
          <div class="flex items-center">
            <input
              v-model="searchQuery"
              type="text"
              class="px-3 w-[300px] py-3 border rounded-md"
              placeholder="Search..."
              @input="changePage(1)"
            />
          </div>
        </div>

        <div class="overflow-y-auto max-h-[550px] mt-2">
          <table class="w-full border-collapse text-text text-[13px]">
            <thead>
              <tr class="bg-[#147452] text-white">
                <th class="px-4 py-2 text-left border-b w-[20%]">
                  Program Code
                </th>
                <th class="px-4 py-2 text-left border-b w-[15%]">
                  Program Name
                </th>

                <th class="px-4 py-2 text-left border-b w-[10%]">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item, index) in paginatedData"
                :key="item.id"
                :class="{ 'bg-green-200': (index + 1) % 2 === 0 }"
              >
                <td class="px-4 py-3 border-b w-[15%]">
                  {{ item.maintenance_program_code }}
                </td>
                <td class="px-4 py-3 border-b w-[20%]">
                  {{ item.maintenance_program }}
                </td>

                <td class="px-4 py-3 border-b w-[10%] flex gap-2">
                  <button
                    class="p-2 py-1 bg-blue-200 hover:bg-blue-300 text-blue-700 rounded-lg flex gap-1"
                  >
                    <icon name="eye-open" /> View
                  </button>
                  <button
                    class="p-2 py-1 bg-red-200 hover:bg-red-300 text-red-700 rounded-md flex gap-1"
                  >
                    <icon name="trash" /> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-center mt-4">
          <div class="text-gray-700">
            <span>
              Showing {{ startIndex }} to {{ endIndex }} of
              {{ filteredData.length }} entries
            </span>
          </div>
          <div class="flex items-center justify-center mt-4">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-1 bg-gray-300 text-gray-700 rounded-l-md hover:bg-gray-400"
            >
              &lt;
            </button>
            <span v-for="page in totalPages" :key="page">
              <button
                @click="changePage(page)"
                :class="{
                  'bg-Green text-white': currentPage === page,
                  'bg-gray-200 text-gray-700': currentPage !== page,
                }"
                class="px-3 py-1 mx-1 rounded-md hover:bg-green-300"
              >
                {{ page }}
              </button>
            </span>
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-1 bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAddProgramOpen"><addProgram /></div>
  </div>
</template>

<script>
import axios from "axios";
import addProgram from "../actions/add-program.vue";
import icon from "@/assets/icons/icon.vue";

export default {
  name: "SubjectTable",
  components: { addProgram, icon },
  data() {
    return {
      searchQuery: "",
      itemsPerPage: 10,
      currentPage: 1,
      isAddProgramOpen: false,
      items: [],
    };
  },
  computed: {
    totalPages() {
      return Math.max(
        1,
        Math.ceil(this.filteredData.length / this.itemsPerPage)
      );
    },
    filteredData() {
      return this.items.filter(
        (item) =>
          item.maintenance_program_code
            ?.toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          item.maintenance_program
            ?.toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredData.slice(start, start + this.itemsPerPage);
    },
    startIndex() {
      return this.filteredData.length === 0
        ? 0
        : (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endIndex() {
      return Math.min(
        this.currentPage * this.itemsPerPage,
        this.filteredData.length
      );
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    toggleAddProgramOpen() {
      this.isAddProgramOpen = !this.isAddProgramOpen;
    },
    async fetchProgramData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/maintenance/get-program"
        );
        this.items = response.data;
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    },
    startAutoRefresh() {
      this.refreshInterval = setInterval(() => {
        this.fetchProgramData();
      }, 1000);
    },
    stopAutoRefresh() {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval);
        this.refreshInterval = null;
      }
    },
  },
  mounted() {
    this.fetchProgramData();
    this.startAutoRefresh();
  },
  beforeUnmount() {
    this.stopAutoRefresh();
  },
};
</script>
