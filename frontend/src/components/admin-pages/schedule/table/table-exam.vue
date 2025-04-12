<template>
  <div>
    <div class="text-sm flex justify-between">
      <div class="text-[13px] text-text mt-4 font-regular">
        Pages / Student Records
      </div>

      <button
        class="flex gap-1 items-center bg-blue-800 text-white hover:text-blue-700 p-3 py-2 rounded-md hover:bg-green-300 hover:shadow-lg"
        @click="toggleGenerateSchedule"
      >
        <icon name="add-students"></icon> Generate Schedule
      </button>
    </div>

    <div class="text-[14px] bg-white" v-if="isTable">
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
          <table
            class="min-w-full border-collapse table-auto text-text text-[13px]"
          >
            <thead>
              <tr class="bg-[#147452] text-white">
                <th class="px-4 py-2 text-left border-b">Day</th>
                <th class="px-4 py-2 text-left border-b">Time</th>
                <th class="px-4 py-2 text-left border-b">Institutes</th>
                <th class="px-4 py-2 text-left border-b">Program</th>
                <th class="px-4 py-2 text-left border-b">Year</th>
                <th class="px-4 py-2 text-left border-b">Set</th>
                <th class="px-4 py-2 text-left border-b">Class Size</th>
                <th class="px-4 py-2 text-left border-b">Course Code</th>
                <th class="px-4 py-2 text-left border-b">Exam Type</th>
                <th class="px-4 py-2 text-left border-b">Instructor</th>
                <th class="px-4 py-2 text-left border-b">Room Number</th>
                <th class="px-4 py-2 text-left border-b">Proctor</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(entry, index) in paginatedData"
                :key="index"
                class="border-b"
              >
                <td class="px-4 py-2">{{ entry.dayName }}</td>
                <td class="px-4 py-2">{{ entry.timeName }}</td>
                <td class="px-4 py-2">{{ entry.instituteName }}</td>
                <td class="px-4 py-2">{{ entry.programName }}</td>
                <td class="px-4 py-2">{{ entry.yearName }}</td>
                <td class="px-4 py-2">{{ entry.setName }}</td>
                <td class="px-4 py-2">{{ entry.className }}</td>
                <td class="px-4 py-2">{{ entry.courseCode }}</td>
                <td class="px-4 py-2">{{ entry.examType }}</td>
                <td class="px-4 py-2">{{ entry.teacherName }}</td>
                <td class="px-4 py-2">{{ entry.roomNames }}</td>
                <td class="px-4 py-2">{{ entry.proctorName }}</td>
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
  </div>
</template>

<script>
import icon from "@/assets/icons/icon.vue";
import axios from "axios";

export default {
  name: "ClassRoomTable",
  components: { icon },
  data() {
    return {
      isTable: false,
      searchQuery: "",
      itemsPerPage: 10,
      currentPage: 1,
      combinedData: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    filteredData() {
      return this.searchQuery
        ? this.combinedData.filter((entry) =>
            Object.values(entry).some((value) =>
              String(value)
                .toLowerCase()
                .includes(this.searchQuery.toLowerCase())
            )
          )
        : this.combinedData;
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
    async fetchData() {
      try {
        const [
          classRes,
          roomRes,
          teacherRes,
          yearRes,
          setRes,
          dayRes,
          timeRes,
          programRes,
          subjectRes,
          institutesRes,
        ] = await Promise.all([
          axios.get("http://localhost:8000/entry/get-class"),
          axios.get("http://localhost:8000/entry/get-room"),
          axios.get("http://localhost:8000/entry/get-teacher"),
          axios.get("http://localhost:8000/entry/get-year"),
          axios.get("http://localhost:8000/entry/get-set"),
          axios.get("http://localhost:8000/entry/get-day"),
          axios.get("http://localhost:8000/maintenance/get-time"),
          axios.get("http://localhost:8000/maintenance/get-program"),
          axios.get("http://localhost:8000/entry/get-subject"),
          axios.get("http://localhost:8000/entry/get-institutes"),
        ]);

        const teachers = teacherRes.data.map(
          (teacher) => teacher.entry_first_name
        );

        // Convert responses to maps for easy lookup
        const yearMap = new Map(
          yearRes.data.map((y) => [y.entry_year, y.entry_year])
        );
        const subjectMap = new Map(
          subjectRes.data.map((s) => [
            s.entry_subject_year,
            s.entry_subject_code,
          ])
        );

        this.combinedData = roomRes.data.map((room, index) => {
          const subjectYear = subjectRes.data[index]?.entry_subject_year;
          const matchingYear = yearMap.get(subjectYear) || "No Year Assigned";
          const subjectCode =
            subjectMap.get(subjectYear) || "No Subject Assigned";
          const randomTeacher =
            teachers.length > 0
              ? teachers[Math.floor(Math.random() * teachers.length)]
              : "No Proctor Assigned";

          return {
            roomId: room.id,
            roomName: room.entry_roomn,
            roomNames: room.entry_room || "No Room Assigned",
            instituteName:
              institutesRes.data[index]?.entry_institutes ||
              "No Institutes Assigned",
            className: classRes.data[index]?.entry_class || "No Class Assigned",
            teacherName:
              teacherRes.data[index]?.entry_first_name || "No Teacher Assigned",
            yearName: matchingYear, // Ensures the correct year is assigned
            setName: setRes.data[index]?.entry_set || "No Set",
            timeName:
              timeRes.data[index]?.maintenance_start_time || "No Time Assigned",
            dayName: dayRes.data[index]?.entry_day || "No Day",
            programName:
              programRes.data[index]?.maintenance_program_code ||
              "No Program Assigned",
            courseCode: subjectCode, // Assigns the correct subject based on the subject year
            proctorName: randomTeacher,
          };
        });

        this.isTable = this.combinedData.length > 0;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    toggleGenerateSchedule() {
      this.fetchData();
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>
