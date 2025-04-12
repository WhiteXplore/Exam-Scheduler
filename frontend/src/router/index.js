import { createRouter, createWebHistory } from "vue-router";
import SidebarView from "@/views/adminViews/sidebarView/SidebarView.vue";
// !GLOBAL LOG IN PAGE FOR ADMIN AND FACULTY
import LoginView from "@/views/Signin-SignoutViews/LoginView.vue";
import RegisterView from "@/views/Signin-SignoutViews/RegisterView.vue";
// !SCHEDULED VIEWS
import ClassScheduleView from "@/views/adminViews/scheduleView/ClassScheduleView.vue";
import ExamScheduleView from "@/views/adminViews/scheduleView/ExamScheduleView.vue";

// !DASHBOARD VIEWS
import DashboardView from "@/views/adminViews/dashboardView/DashboardView.vue";

// !TOPBAR VIWEWS
import ProfileView from "@/views/adminViews/profileView/ProfileView.vue";

// !ENTRY VIEWS
import classView from "@/views/adminViews/entryView.vue/classView.vue";
import roomView from "@/views/adminViews/entryView.vue/roomView.vue";
import subjectView from "@/views/adminViews/entryView.vue/subjectView.vue";
import teacherView from "@/views/adminViews/entryView.vue/teacherView.vue";
import institutesView from "@/views/adminViews/entryView.vue/institutesView.vue";
import yearView from "@/views/adminViews/entryView.vue/yearView.vue";
import setView from "@/views/adminViews/entryView.vue/setView.vue";
import dayView from "@/views/adminViews/entryView.vue/dayView.vue";

// !MAINTENACE VIEWS
import schoolYearView from "@/views/adminViews/maintenaceView/schoolYearView.vue";
import programView from "@/views/adminViews/maintenaceView/programView.vue";
import rankView from "@/views/adminViews/maintenaceView/rankView.vue";
import salutationView from "@/views/adminViews/maintenaceView/salutationView.vue";
import timeView from "@/views/adminViews/maintenaceView/timeView.vue";
import departmentView from "@/views/adminViews/maintenaceView/departmentView.vue";
import designationView from "@/views/adminViews/maintenaceView/designationView.vue";

import editClass_scheduled from "@/components/admin-pages/schedule/action/edit-class_scheduled.vue";
import viewClassScheduled from "@/components/admin-pages/schedule/action/view-class-scheduled.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/admin",
    name: "admin",
    component: SidebarView,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardView,
      },

      // ?SCHEDULED SUBMENU
      {
        path: "class-schedule",
        name: "class-schedule",
        component: ClassScheduleView,
      },
      {
        path: "exam-schedule",
        name: "exam-schedule",
        component: ExamScheduleView,
      },
      // ?ENTRY SUBMENU
      {
        path: "entry-class",
        name: "classView",
        component: classView,
      },
      {
        path: "entry-room",
        name: "roomView",
        component: roomView,
      },
      {
        path: "entry-subject",
        name: "subjectView",
        component: subjectView,
      },
      {
        path: "entry-teacher",
        name: "teacherView",
        component: teacherView,
      },
      {
        path: "entry-institutes",
        name: "institutesView",
        component: institutesView,
      },
      {
        path: "entry-year",
        name: "yearView",
        component: yearView,
      },
      {
        path: "entry-set",
        name: "setView",
        component: setView,
      },
      {
        path: "entry-day",
        name: "dayView",
        component: dayView,
      },

      // ?MAINTENANCE SUBMENU
      {
        path: "maintenance-school-year",
        name: "schoolYearView",
        component: schoolYearView,
      },
      {
        path: "maintenance-program",
        name: "programView",
        component: programView,
      },
      {
        path: "maintenance-rank",
        name: "rankView",
        component: rankView,
      },
      {
        path: "maintenance-salutation",
        name: "salutationView",
        component: salutationView,
      },
      {
        path: "maintenance-time",
        name: "timeView",
        component: timeView,
      },
      {
        path: "maintenance-department",
        name: "departmentView",
        component: departmentView,
      },
      {
        path: "maintenance-designation",
        name: "designationView",
        component: designationView,
      },

      {
        path: "profile",
        name: "profile",
        component: ProfileView,
      },

      {
        path: "/scheduled-edit/:id",
        name: "ScheduledView",
        component: viewClassScheduled,
        props: true,
      },

      {
        path: "/scheduled-edit/:id",
        name: "ScheduledEdit",
        component: editClass_scheduled,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
