<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Class Scheduled</h1>
    </div>

    <div>
      <tableScheduleClass />
    </div>
  </div>
</template>
<script>
import tableScheduleClass from "./table/table-schedule-class.vue";
export default {
  name: "ClassScheduledPage",
  components: {
    tableScheduleClass,
  },
};
</script>
<style lang=""></style>
