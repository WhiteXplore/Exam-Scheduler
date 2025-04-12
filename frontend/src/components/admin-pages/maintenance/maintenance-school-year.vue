<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">School Year</h1>
    </div>

    <div><tableSchoolYear /></div>
  </div>
</template>
<script>
import tableSchoolYear from "./table/table-school-year.vue";
export default {
  name: "MMaintenanceSchoolYearTable",
  components: { tableSchoolYear },
};
</script>
<style lang=""></style>
