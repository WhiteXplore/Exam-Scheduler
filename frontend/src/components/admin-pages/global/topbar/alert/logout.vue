<template>
  <div class="flex justify-center items-center absolute top-20">
    <div class="bg-white w-[370px] p-6 rounded-lg shadow-lg text-center">
      <div
        class="flex items-center justify-center bg-red-300 w-20 h-20 rounded-full mx-auto animate-pulse"
      >
        <icon :name="'questionMark'" class="text-red-900" />
      </div>
      <p class="text-lg font-semibold mt-2 text-gray-900">
        Are you sure you want to <span class="text-red-900">logout?</span>
      </p>
      <div class="mt-4 flex justify-center space-x-2 font-semibold">
        <button
          @click="toggleDeleteConfirmed"
          class="px-4 py-2 hover:bg-red-300 text-red-900 rounded-md"
        >
          Yes
        </button>
        <button
          @click="$emit('close')"
          class="px-4 py-2 hover:bg-gray-600 rounded-md text-gray-900"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import icon from "@/assets/icons/icon.vue";

export default {
  name: "LogoutPage",
  components: {
    icon,
  },
  setup() {
    const router = useRouter();

    const toggleDeleteConfirmed = async () => {
      try {
        await axios.post(
          "http://localhost:8000/auth/logout",
          {},
          { withCredentials: true }
        );
        localStorage.removeItem("token"); // Remove stored token if ever naay token !
        router.push("/"); // Redirect to login page
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    return { toggleDeleteConfirmed };
  },
};
</script>
