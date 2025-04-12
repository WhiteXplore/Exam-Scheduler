<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Designation</h1>
    </div>

    <div><tableDesignation /></div>
  </div>
</template>
<script>
import tableDesignation from "./table/table-designation.vue";
export default {
  name: "MMaintenanceDesignationTable",
  components: { tableDesignation },
};
</script>
<style lang=""></style>
