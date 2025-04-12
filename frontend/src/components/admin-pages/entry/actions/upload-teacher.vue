<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen"
  >
    <div
      class="flex flex-col justify-center items-center w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
    >
      <div class="w-full text-sm gap-2 space-y-2">
        <div class="flex flex-col space-y-2 flex-1 w-full">
          <label for="entry_subject_year" class="font-semibold">Teacher:</label>
          <select
            v-model="selectedTeacher"
            name="entry_selected_teacher"
            id="entry_selected_teacher"
            class="px-3 py-3 border w-full border-gray-300 rounded-md text-gray-700"
          >
            <option disabled value="">Select a teacher</option>
            <option value="Arial Amara">Arial Amara</option>
          </select>
        </div>
      </div>
      <!-- Import File Content -->
      <div v-if="isImportFile" class="flex flex-col w-full">
        <div class="flex justify-start">
          <h1 class="font-semibold text-lg text-gray-800">Import a File</h1>
        </div>

        <!-- Drag & Drop File Upload -->
        <div
          class="flex justify-center items-center cursor-pointer border-2 border-dashed border-gray-300 rounded-md p-8 w-[400px] max-w-lg mx-auto mt-3"
          :class="{ 'bg-gray-100': dragging }"
          @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
          @click="triggerFileInput"
        >
          <div class="text-center">
            <p v-if="!file" class="text-gray-600">
              <span class="text-green1">Upload a file</span> or drag and drop<br />
              CSV up to 10MB
            </p>
            <p v-else class="text-green-600">File uploaded: {{ file.name }}</p>
            <input
              type="file"
              class="hidden"
              ref="fileInput"
              @change="onFileChange"
              accept=".csv"
            />
          </div>
        </div>

        <!-- Reminders -->
        <div class="mt-3 text-[13px] flex justify-between">
          <div>
            <p class="text-gray-600">Accepted Files: .csv</p>
            <p class="text-green-700">example.csv</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-2 justify-end">
          <button
            class="bg-red-700 hover:bg-red-500 px-5 py-2 rounded-md text-white"
            @click="closeModal"
            :disabled="loading"
          >
            Cancel
          </button>
          <button
            class="bg-green-800 hover:bg-green-500 px-5 py-2 rounded-md text-white"
            @click="importFile"
            :disabled="!file || loading"
          >
            {{ loading ? "Uploading..." : "Import" }}
          </button>
        </div>

        <!-- Upload Status Message -->
        <p v-if="message" class="mt-2 text-center text-green-600">
          {{ message }}
        </p>
      </div>
    </div>
  </div>

  <!-- Confirmation Modal -->
  <ConfirmedSubmitted
    v-if="isConfirmedSubmitted"
    @close="isConfirmedSubmitted = false"
  />
</template>

<script>
import axios from "axios";
import ConfirmedSubmitted from "../../global/alert/confirmed-submitted.vue";

export default {
  name: "UploadCSVPAGE",
  components: {
    ConfirmedSubmitted,
  },
  data() {
    return {
      isOpen: true,
      isConfirmedSubmitted: false,
      isImportFile: true,
      dragging: false,
      file: null,
      loading: false,
      message: "",
      selectedYear: "", // Stores the selected year
      teachers: [], // Store teacher list
    };
  },
  methods: {
    onDragOver() {
      this.dragging = true;
    },
    onDragLeave() {
      this.dragging = false;
    },
    onDrop(event) {
      this.dragging = false;
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.handleFile(files[0]);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.handleFile(file);
      }
    },
    handleFile(file) {
      if (!file.name.endsWith(".csv")) {
        alert("Only CSV files are allowed!");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit!");
        return;
      }
      this.file = file;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    async importFile() {
      if (!this.selectedTeacher) {
        alert("Please select a teacher before uploading.");
        return;
      }

      this.loading = true;
      this.message = "";

      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("teacherId", this.selectedTeacher); // Send selected teacher ID

      try {
        const response = await axios.post(
          "http://localhost:8000/entry/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response) {
          this.isOpen = false;
          this.isConfirmedSubmitted = true;
        } else {
          this.message = "File uploaded, but no data was saved.";
        }
      } catch (error) {
        console.error(
          "Error uploading file:",
          error.response?.data || error.message
        );
        this.message =
          error.response?.data?.message || "Failed to upload the file.";
      } finally {
        this.loading = false;
      }
    },

    closeModal() {
      this.isOpen = false;
      this.$emit("close");
    },
  },
};
</script>
