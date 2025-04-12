<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Department</h1>
    </div>

    <div><tableDepartment /></div>
  </div>
</template>
<script>
import tableDepartment from "./table/table-department.vue";
export default {
  name: "MaintenanceDepartmentTable",
  components: { tableDepartment },
};
</script>
<style lang=""></style>
