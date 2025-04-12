<template>
  <div
    class="min-w-screen min-h-screen bg-green-800 flex items-center justify-center"
  >
    <div class="bg-white shadow-xl rounded-3xl w-[500px]">
      <!-- Header -->
      <h2
        class="text-xl font-semibold text-white p-3 px-4 bg-green-600 rounded-t-xl"
      >
        Register Your Account
      </h2>
      <div class="p-6">
        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-4 text-[14px]">
          <div>
            <h1 class="font-semibold">Personal Detials</h1>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Middle Name</label
            >
            <input
              type="middle_name"
              v-model="middle_name"
              class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your middle name"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Last Name</label
            >
            <input
              type="last_name"
              v-model="last_name"
              class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >First Name</label
            >
            <input
              type="first_name"
              v-model="first_name"
              class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div>
            <h1 class="font-semibold">Account Detials</h1>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {{ showPassword ? "🔒" : "👁️" }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Confirm Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="confirmPassword"
                class="mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Confirm your password"
                required
                @input="validatePasswordMatch"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {{ showPassword ? "🔒" : "👁️" }}
              </button>
            </div>
            <p v-if="passwordError" class="text-red-500 text-xs mt-1">
              {{ passwordError }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            :disabled="passwordError"
          >
            Submit
          </button>

          <div
            class="flex flex-col items-center gap-4 justify-center text-[12px] text-gray-600"
          >
            <router-link to="/">
              <p>
                Already have an account?
                <span class="text-green-900 font-semibold underline"
                  >Sign in here!</span
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
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      passwordError: "",
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validatePasswordMatch() {
      if (this.password !== this.confirmPassword) {
        this.passwordError = "Passwords do not match!";
      } else {
        this.passwordError = "";
      }
    },
    submitForm() {
      if (!this.passwordError) {
        alert("Registration successful!");
        // Handle form submission logic here
      }
    },
  },
};
</script>
