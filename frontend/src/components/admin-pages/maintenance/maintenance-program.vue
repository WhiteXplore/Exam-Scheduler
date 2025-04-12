<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Program</h1>
    </div>

    <div><tableProgram /></div>
  </div>
</template>
<script>
import tableProgram from "./table/table-program.vue";
export default {
  name: "MaintenanceProgramTable",
  components: { tableProgram },
};
</script>
<style lang=""></style>
