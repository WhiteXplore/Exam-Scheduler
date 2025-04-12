<template>
  <div class="bg-webBackground w-screen h-screen flex">
    <!-- Sidebar -->
    <div
      :class="{
        'w-16': !isExpanded,
        'w-64': isExpanded,
      }"
      class="h-full fixed left-0 top-0 bg-green text-white p-3"
    >
      <div class="flex flex-col justify-start cursor-pointer w-full mt-5">
        <!-- Toggle Sidebar -->
        <div @click="toggleSidebar" class="text-white flex justify-between">
          <div class="flex gap-4">
            <img
              src="../../../../assets/img/logo.png"
              alt=""
              :class="{
                'w-10': isExpanded,
                hidden: !isExpanded,
              }"
            />
            <p
              :class="{
                'text-left text-[13px] font-medium tracking-wider': isExpanded,
                hidden: !isExpanded,
              }"
            >
              Exam Scheduler and Faculty Loading
            </p>
          </div>
          <icon
            :name="'expand'"
            class="cursor-pointer"
            :class="{ 'ml-3': !isExpanded }"
          />
        </div>
      </div>
      <!-- Sidebar  -->
      <div
        class="flex flex-col items-start justify-start mt-6 ml-2 tracking-wide font-meduim text-[13px] w-full"
      >
        <!-- !Dashboard -->
        <router-link
          to="/admin/dashboard"
          class="flex items-center justify-between w-full hover:bg-white hover:text-green-950 rounded-md p-2 cursor-pointer mt-2"
          :class="{
            'bg-white text-green-950 rounded-md w-full': isActiveDashboard,
            'text-white': !isActiveDashboard,
            'hover:bg-white hover:text-green-950':
              !isActiveDashboard && !isExpanded,
            'hover:scale-105 duration-300 ease-in-out': !isExpanded,
          }"
          @click="setActiveDashboard"
        >
          <div class="flex gap-5">
            <icon
              :name="'dashboard'"
              :class="'flex items-center justify-center '"
            />
            <div :class="{ hidden: !isExpanded }">Dashboard</div>
          </div>
        </router-link>

        <!-- !Scheduled  -->
        <router-link
          to="/admin/class-schedule"
          class="flex items-center justify-between w-full p-2 cursor-pointer hover:bg-white hover:text-green-950 hover:rounded-md z-10 mt-2 transition-all duration-300 ease-in-out"
          :class="{
            'bg-white text-green-950 rounded-t-md': isShowScheduleMenu,
          }"
          @click="toggleShowSchedule"
        >
          <div class="flex gap-5">
            <icon name="scheduled" />
            <span v-show="isExpanded">Schedule</span>
          </div>
          <icon
            name="arrow-down"
            class="transition-transform"
            :class="{ 'rotate-180': isShowScheduleMenu }"
            v-show="isExpanded"
          />
        </router-link>

        <transition name="slide">
          <div
            v-if="isShowScheduleMenu"
            class="transition-all"
            :class="{
              hidden: !isExpanded,
            }"
          >
            <router-link
              v-for="item in scheduleSubMenu"
              :key="item.name"
              :to="item.route"
            >
              <div
                class="p-2 w-[232px] cursor-pointer transition-all duration-300 ease-in-out"
                :class="{
                  'bg-green-950 text-white':
                    activeScheduledSubMenu === item.name,
                  'bg-white text-green-950 hover:bg-gray-200':
                    activeScheduledSubMenu !== item.name,
                }"
                @click="setActiveScheduleSubMenu(item.name)"
              >
                <nav class="ml-10">{{ item.label }}</nav>
              </div>
            </router-link>
          </div>
        </transition>

        <!-- ?DROP DOWNS FOR ENTRIES  -->
        <!-- !Entry Section -->
        <router-link
          to="/admin/entry-class"
          class="flex items-center justify-between w-full p-2 cursor-pointer hover:bg-white hover:text-green-950 hover:rounded-md z-10 mt-2 transition-all duration-300 ease-in-out"
          :class="{ 'bg-white text-green-950 rounded-t-md': isShowEntryMenu }"
          @click="toggleShowEntry"
        >
          <div class="flex gap-5">
            <icon name="stack" />
            <span v-show="isExpanded">Entry</span>
          </div>
          <icon
            name="arrow-down"
            class="transition-transform"
            :class="{ 'rotate-180': isShowEntryMenu }"
            v-show="isExpanded"
          />
        </router-link>
        <transition name="slide">
          <div
            v-if="isShowEntryMenu"
            class="transition-all"
            :class="{ hidden: !isExpanded }"
          >
            <router-link
              v-for="item in entrySubMenu"
              :key="item.name"
              :to="item.route"
            >
              <div
                class="p-2 w-[232px] cursor-pointer transition-all duration-300 ease-in-out"
                :class="{
                  'bg-green-950 text-white': activeEntrySubMenu === item.name,
                  'bg-white text-green-950 hover:bg-gray-200':
                    activeEntrySubMenu !== item.name,
                }"
                @click="setActiveEntrySubMenu(item.name)"
              >
                <nav class="ml-10">{{ item.label }}</nav>
              </div>
            </router-link>
          </div>
        </transition>

        <!-- !Maintenance Section -->
        <router-link
          to="/admin/maintenance-school-year"
          class="flex items-center justify-between w-full p-2 cursor-pointer hover:bg-white hover:text-green-950 hover:rounded-md z-10 mt-2 transition-all duration-300 ease-in-out"
          :class="{
            'bg-white text-green-950 rounded-t-md': isShowMaintenanceMenu,
          }"
          @click="toggleShowMaintenance"
        >
          <div class="flex gap-5">
            <icon name="stack" />
            <span v-show="isExpanded">Maintenance</span>
          </div>
          <icon
            name="arrow-down"
            class="transition-transform"
            :class="{ 'rotate-180': isShowMaintenanceMenu }"
            v-show="isExpanded"
          />
        </router-link>

        <transition name="slide">
          <div
            v-if="isShowMaintenanceMenu"
            class="transition-all"
            :class="{ hidden: !isExpanded }"
          >
            <router-link
              v-for="item in maintenanceSubMenu"
              :key="item.name"
              :to="item.route"
            >
              <div
                class="p-2 w-[232px] cursor-pointer transition-all duration-300 ease-in-out"
                :class="{
                  'bg-green-950 text-white':
                    activeMaintenanceSubMenu === item.name,
                  'bg-white text-green-950 hover:bg-gray-200':
                    activeMaintenanceSubMenu !== item.name,
                }"
                @click="setActiveMaintenanceSubMenu(item.name)"
              >
                <nav class="ml-10">{{ item.label }}</nav>
              </div>
            </router-link>
          </div>
        </transition>

        <!-- Setting -->
        <router-link
          to="#"
          class="flex items-center justify-between w-full hover:bg-white hover:text-green-950 rounded-md p-2 cursor-pointer mt-2"
          :class="{
            'bg-white text-green-950 rounded-md w-full': isActiveSetting,
            'text-white': !isActiveSetting,
            'hover:bg-white hover:text-green-950':
              !isActiveSetting && !isExpanded,
            'hover:scale-105 duration-300 ease-in-out': !isExpanded,
          }"
          @click="setActiveSetting"
        >
          <div class="flex gap-5">
            <icon
              :name="'setting'"
              :class="'flex items-center justify-center '"
            />
            <div :class="{ hidden: !isExpanded }">Setting</div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- End of Sidebar -->

    <!-- Main Content -->
    <div
      :class="{
        'ml-16': !isExpanded,
        'ml-64': isExpanded,
        'flex-grow': true,
      }"
      class="transition-all pt-4 pb-0 px-4 min-h-screen rounded-t-lg overflow-hidden z-50"
    >
      <slot>
        <div class="bg-[#F8F8FB] w-full h-full rounded-t-lg">
          <schedTopbar />

          <router-view></router-view>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/icons/icon.vue";
import schedTopbar from "../topbar/sched-topbar.vue";

export default {
  name: "SidebarPage",
  components: {
    icon,
    schedTopbar,
  },

  data() {
    return {
      isExpanded: true,
      isActiveDashboard: false,
      isActiveSetting: false,
      isShowEntryMenu: false,
      isShowScheduleMenu: false,
      isShowMaintenanceMenu: false,
      activeEntrySubMenu: null,
      activeMaintenanceSubMenu: null,
      activeScheduledSubMenu: null,
      entrySubMenu: [
        { name: "class", label: "Class", route: "entry-class" },
        { name: "room", label: "Room", route: "entry-room" },
        { name: "subject", label: "Subject", route: "entry-subject" },
        { name: "teacher", label: "Teacher", route: "entry-teacher" },
        {
          name: "institutes",
          label: "Institutes",
          route: "entry-institutes",
        },
        {
          name: "year",
          label: "Year",
          route: "entry-year",
        },
        {
          name: "set",
          label: "Sets",
          route: "entry-set",
        },
        {
          name: "day",
          label: "Day",
          route: "entry-day",
        },
      ],
      maintenanceSubMenu: [
        {
          name: "school-year",
          label: "School Year",
          route: "maintenance-school-year",
        },
        { name: "program", label: "Program", route: "maintenance-program" },
        { name: "rank", label: "Rank", route: "maintenance-rank" },
        {
          name: "salutation",
          label: "Salutation",
          route: "maintenance-salutation",
        },
        { name: "time", label: "Time", route: "maintenance-time" },
        {
          name: "department",
          label: "Department",
          route: "maintenance-department",
        },
        {
          name: "designation",
          label: "Designation",
          route: "maintenance-designation",
        },
      ],
      scheduleSubMenu: [
        {
          name: "classScheduled",
          label: "Class Scheduled",
          route: "class-schedule",
        },
        {
          name: "examScheduled",
          label: "Exam scheduled",
          route: "exam-schedule",
        },
      ],
    };
  },

  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },

    resetActiveStates() {
      this.isActiveDashboard = false;
      this.isActiveSetting = false;
      this.isActiveClassScheduled = false;
      this.isActiveExamScheduled = false;
      this.isShowEntryMenu = false;
      this.isShowScheduleMenu = false;
      this.isShowMaintenanceMenu = false;
    },

    setActiveDashboard() {
      this.resetActiveStates();
      this.isActiveDashboard = true;
    },

    setActiveSetting() {
      this.resetActiveStates();
      this.isActiveSetting = true;
    },
    toggleShowSchedule() {
      this.isShowScheduleMenu = !this.isShowScheduleMenu;
      if (!this.isShowScheduleMenu) {
        this.activeScheduledSubMenu = null;
      } else {
        // Ensure other menus close when this one opens
        this.isShowEntryMenu = false;
        this.isShowMaintenanceMenu = false;
        this.isActiveDashboard = false;
      }
    },

    toggleShowEntry() {
      this.isShowEntryMenu = !this.isShowEntryMenu;
      if (!this.isShowEntryMenu) {
        this.activeEntrySubMenu = null;
      } else {
        this.isShowScheduleMenu = false;
        this.isShowMaintenanceMenu = false;
        this.isActiveDashboard = false;
      }
    },

    toggleShowMaintenance() {
      this.isShowMaintenanceMenu = !this.isShowMaintenanceMenu;
      if (!this.isShowMaintenanceMenu) {
        this.activeMaintenanceSubMenu = null;
      } else {
        this.isShowScheduleMenu = false;
        this.isShowEntryMenu = false;
        this.isActiveDashboard = false;
      }
    },

    setActiveScheduleSubMenu(menuName) {
      this.activeScheduledSubMenu = menuName;
    },

    setActiveEntrySubMenu(menuName) {
      this.activeEntrySubMenu = menuName;
    },

    setActiveMaintenanceSubMenu(menuName) {
      this.activeMaintenanceSubMenu = menuName;
    },
  },
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}

.transition-transform {
  transition: transform 0.3s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0);
  opacity: 1;
}
</style>
