<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen"
  >
    <div
      class="rounded-xl shadow-lg w-[450px] max-w-lg bg-white absolute top-20"
    >
      <div
        class="text-text1 text-[13px] p-6 flex place-items-center justify-center flex-col"
      >
        <div class="flex flex-col items-center">
          <div
            class="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mb-2 animate-pulse"
          >
            <icon name="questionMark" class="text-red-600" />
          </div>

          <h1 class="font-bold tracking-wide text-lg text-red-600">
            Delete Confirmation
          </h1>
        </div>

        <!-- Main Content -->

        <div class="text-gray-700">
          <p
            class="p-3 px-4 text-[15px] flex text-center rounded-md text-gray-500"
          >
            Are you sure you want to delete this item?
          </p>
        </div>

        <!-- Submit and Cancel Button -->
        <div class="flex gap-2 p-4">
          <button
            class="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md text-gray-700"
            @click="closeModal"
          >
            No, Cancel
          </button>
          <button
            class="bg-red-700 hover:bg-red-300 px-5 py-2 rounded-md text-white hover:text-red-700"
            @click="toggleDeleteData"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isDeleted"><confirmedDeleted /></div>
</template>

<script>
import axios from "axios";
import Icon from "@/assets/icons/icon.vue";
import ConfirmedDeleted from "../../global/alert/confirmed-deleted.vue";

export default {
  name: "DeleteConfirmationPage",
  components: {
    Icon,
    ConfirmedDeleted,
  },
  props: {
    classId: {
      type: [Object, Number, String], // Allow multiple types
      required: true,
    },
  },
  data() {
    return {
      isOpen: true,
      isDeleted: false,
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
      this.$emit("close");
    },

    async toggleDeleteData() {
      try {
        const id = this.classId.id ?? this.classId;
        await axios.delete(`http://localhost:8000/entry/class/${id}`);
        this.isOpen = false;
        this.isDeleted = true;
      } catch (error) {
        console.error("Error deleting class records:", error);
      }
    },
  },
};
</script>
