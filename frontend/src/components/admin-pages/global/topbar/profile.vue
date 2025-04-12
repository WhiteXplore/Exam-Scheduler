<template>
  <div
    v-if="isProfileMenuOpen"
    class="bg-white shadow-sm w-full h-full p-3 text-[13px] cursor-pointer rounded-md z-20"
  >
    <div class="space-y-2">
      <router-link to="/admin/profile" @click="toggleCloseProfile">
        <div
          class="w-[120px] p-2 py-1 ml-2 hover:bg-green-500 hover:text-white rounded-md"
        >
          Profile
        </div>
      </router-link>
      <div
        class="w-[120px] p-2 py-1 ml-2 hover:bg-red-500 hover:text-white rounded-md"
        @click="toggleOpenLogout"
      >
        Logout
      </div>
    </div>
  </div>

  <!-- Modal Wrapper -->
  <div
    v-if="isOpenLogout"
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <logout @close="toggleOpenLogout" @confirm="logoutUser" />
  </div>
</template>

<script>
import Logout from "./alert/logout.vue";

export default {
  name: "ProfilePage",
  components: {
    Logout,
  },
  data() {
    return {
      isOpenLogout: false,
      isProfileMenuOpen: true, // Manage profile menu visibility
    };
  },
  methods: {
    toggleCloseProfile() {
      this.isProfileMenuOpen = false; // Close profile menu
    },

    toggleOpenLogout() {
      this.isOpenLogout = !this.isOpenLogout;
    },

    logoutUser() {
      console.log("Logging out...");
      this.isOpenLogout = false;
      // Add actual logout logic here
    },
  },
  watch: {
    $route(to) {
      if (to.path === "/profile") {
        this.isProfileMenuOpen = false; // Close menu when navigating to profile
      }
    },
  },
  mounted() {
    if (this.$route.path === "/profile") {
      this.isProfileMenuOpen = false; // Close menu if already on Profile Page
    }
  },
};
</script>
