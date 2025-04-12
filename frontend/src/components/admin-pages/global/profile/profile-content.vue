<template>
  <div class="p-6 py-3 text-gray-700">
    <h1 class="text-lg font-semibold">Account Setting</h1>

    <div class="w-full mt-2">
      <div class="flex gap-3">
        <div class="w-full rounded-2xl bg-white shadow h-[430px] p-3 space-y-4">
          <div
            class="border border-gray-100 shadow-sm rounded-xl w-full h-32 flex items-center"
          >
            <div class="flex items-center gap-5 w-full">
              <img
                src="../../../../assets/img/profile.jpg"
                alt="Profile Picture"
                class="w-16 h-16 rounded-full ml-5"
              />
              <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-1">
                  <p class="font-semibold">Remar John F. Sibug</p>
                  <p class="text-[13px]">Administrative Aide I</p>
                </div>
                <!-- EDIT BUTTON -->
                <div>
                  <button
                    class="border p-3 text-[12px] rounded-xl flex gap-2 mr-5 hover:bg-green-400"
                  >
                    <icon :name="'edit'" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- !Personal Information Section -->
          <div>
            <div
              class="border border-gray-100 shadow-sm rounded-xl w-full h-auto p-4 py-3"
            >
              <div class="flex w-full justify-between items-center">
                <h1 class="font-semibold mb-2">Personal Information</h1>
                <button
                  class="border p-3 text-[12px] rounded-xl flex gap-2 mr-1 hover:bg-green-400"
                >
                  <icon :name="'edit'" />
                  Edit
                </button>
              </div>

              <div class="flex gap-32">
                <!-- Column 1 -->
                <div class="flex flex-col gap-5">
                  <div>
                    <label class="text-[13px] text-gray-500">First Name</label>
                    <p class="font-semibold">Remar John</p>
                  </div>

                  <div>
                    <label class="text-[13px] text-gray-500">Position</label>
                    <p class="font-semibold">Administrative Aide I</p>
                  </div>

                  <div>
                    <label class="text-[13px] text-gray-500"
                      >Email Address</label
                    >
                    <p class="font-semibold">remarjohn.sibug@dnsc.edu.ph</p>
                  </div>
                </div>

                <!-- Column 2 -->
                <div class="flex flex-col gap-5">
                  <div>
                    <label class="text-[13px] text-gray-500">Last Name</label>
                    <p class="font-semibold">Sibug</p>
                  </div>

                  <div>
                    <label class="text-[13px] text-gray-500">Office</label>
                    <p class="font-semibold">
                      Technology Support Services Unit
                    </p>
                  </div>

                  <div>
                    <label class="text-[13px] text-gray-500"
                      >Contact Number</label
                    >
                    <p class="font-semibold">09153938157</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Content Section -->
        <div class="shadow w-[1000px] h-[430px] rounded-2xl bg-white p-4 py-3">
          <div class="flex w-full justify-between items-center">
            <h1 class="font-semibold mb-2">Change Password</h1>
            <button
              class="border p-3 text-[12px] rounded-xl flex gap-2 mr-1 hover:bg-green-400"
            >
              <icon :name="'edit'" />
              Edit
            </button>
          </div>

          <div class="mt-3 space-y-4">
            <div>
              <label
                for="old_password"
                class="font-semibold text-sm text-gray-500"
                >Old Password</label
              >
              <input
                type="text"
                class="w-full p-2 py-3 mt-1 border rounded-xl text-[13px]"
                placeholder="Enter old password"
              />
            </div>
            <div>
              <label
                for="new_password"
                class="font-semibold text-sm text-gray-500"
                >New Password</label
              >
              <input
                type="text"
                class="w-full p-2 py-3 mt-1 border rounded-xl text-[13px]"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label
                for="confirm_password"
                class="font-semibold text-sm text-gray-500"
                >Confirm Password</label
              >
              <input
                type="text"
                class="w-full p-2 py-3 mt-1 border rounded-xl text-[13px]"
                placeholder="Enter confirm password"
              />
            </div>

            <div
              class="w-full p-2 py-4 mt-1 bg-green-600 text-center font-semibold text-white cursor-pointer hover:bg-green-500 rounded-xl text-[15px] tracking-wider"
            >
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/icons/icon.vue";

export default {
  name: "ProfileContentPage",
  components: {
    icon,
  },
};
</script>

<style></style>
