<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Time</h1>
    </div>

    <div><tableTime /></div>
  </div>
</template>
<script>
import tableTime from "./table/table-time.vue";
export default {
  name: "MMaintenanceTimeTable",
  components: { tableTime },
};
</script>
<style lang=""></style>
