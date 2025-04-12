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
            class="bg-orange-100 w-16 h-16 flex items-center justify-center rounded-full mb-2 animate-pulse"
          >
            <icon name="exclamation-mark" class="text-orange-600" />
          </div>

          <h1 class="font-bold tracking-wide text-lg text-orange-600">
            Scheduled Existed
          </h1>
        </div>

        <!-- Main Content -->

        <div class="text-gray-700">
          <p
            class="p-3 px-4 text-[14px] flex text-center rounded-md text-gray-800"
          >
            Please create another scheduled, Thank you!
          </p>
        </div>

        <!-- Submit and Cancel Button -->
        <div class="p-4">
          <button
            class="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md text-orange-700"
            @click="closeModal"
          >
            Okay!
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
        await axios.delete(`http://localhost:8000/entry-class/${id}`);
        this.isOpen = false;
        this.isDeleted = true;
      } catch (error) {
        console.error("Error deleting class records:", error);
      }
    },
  },
};
</script>
