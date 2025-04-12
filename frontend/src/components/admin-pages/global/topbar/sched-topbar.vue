<template>
  <div
    class="bg-white py-2 rounded-t-lg flex justify-between items-center p-5 shadow-sm"
  >
    <!-- Left Section: Title -->
    <div class="text-green-600 font-semibold text-[16px]">Exam Scheduler</div>

    <!-- Center Section: Current Date & Time -->
    <div class="text-[13px]">{{ formattedDate }}</div>

    <!-- Right Section: User Info & Profile -->
    <div class="flex gap-4 items-center text-center">
      <div>
        <h1 class="text-[13px] font-semibold">
          {{ user.last_name }},
          {{ user.first_name || "Guest" }}
        </h1>
        <h2 class="text-[11px]">
          {{ user.position || "Wala" }}
        </h2>
      </div>

      <!-- Profile Picture with Click Event -->
      <div
        class="text-[13px] cursor-pointer hover:border-green-600 border-2 rounded-full"
        @click="toggleOpenProfile"
      >
        <img
          :src="user.profilePicture || defaultProfile"
          alt="Profile Picture"
          class="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  </div>

  <!-- Profile Dropdown -->
  <div class="absolute top-[75px] right-6">
    <Profile v-if="isOpenProfile" />
  </div>
</template>

<script>
import axios from "axios";
import Profile from "./profile.vue";
import defaultProfile from "./../../../../assets/img/profile.jpg"; // Default profile image

export default {
  name: "TopBarPage",
  components: { Profile },
  data() {
    return {
      isOpenProfile: false,
      user: {},
      defaultProfile, // Set default profile picture
    };
  },
  computed: {
    formattedDate() {
      return new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    },
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    toggleOpenProfile() {
      this.isOpenProfile = !this.isOpenProfile;
    },
    async fetchUser() {
      try {
        const response = await axios.get("http://localhost:8000/auth/me", {
          withCredentials: true,
        });

        if (response.data) {
          this.user = response.data;
          console.log("Authenticated User:", this.user);
        } else {
          // If no user data is returned, redirect to home
          this.$router.push("/");
          location.reload();
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        this.$router.push("/"); // Redirect on error
      }
    },
  },
};
</script>
