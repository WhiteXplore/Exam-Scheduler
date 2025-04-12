<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Year</h1>
    </div>

    <div><tableYear /></div>
  </div>
</template>
<script>
import tableYear from "./table/table-year.vue";
export default {
  name: "EntryYear",
  components: { tableYear },
};
</script>
<style lang=""></style>
