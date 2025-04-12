<template>
  <div
    class="min-w-screen min-h-screen bg-green-800 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg shadow-xl w-[450px]">
      <div class="flex flex-col mb-5">
        <h2 class="text-xl font-semibold text-gray-800">
          Sign in to Your Account
        </h2>
        <p class="text-[13px] text-gray-600">Welcome back!</p>
      </div>

      <form @submit.prevent="login" class="space-y-4 text-[14px]">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              <icon :name="showPassword ? 'eye-close' : 'eye-open'" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Sign in
        </button>
        <div
          class="flex flex-col items-center gap-4 justify-center text-[12px] text-gray-600"
        >
          <router-link to="/register">
            <p>
              Don't have an account yet?
              <span class="text-green-900 font-semibold underline"
                >Register here!</span
              >
            </p>
          </router-link>
          <div class="flex gap-2">
            <img
              src="../../assets/img/bagong-pilipinas.png"
              alt=""
              class="w-10 h-10"
            />
            <img src="../../assets/img/dnsc.png" alt="" class="w-10 h-10" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import icon from "@/assets/icons/icon.vue";
export default {
  name: "SignupPage",
  components: {
    icon,
  },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      role: "", // Added role to store the user's role
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:8000/auth/login",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        );

        this.role = response.data.role;
        // Redirect based on user role
        if (this.role === "Admin") {
          this.$router.push("/admin/dashboard");
        } else if (this.role === "faculty") {
          this.$router.push("/facutlty/dashboard");
        }
      } catch (error) {
        alert(error.response?.data?.message || "Login failed");
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
