<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Day</h1>
    </div>

    <div><tableDay /></div>
  </div>
</template>
<script>
import tableDay from "./table/table-day.vue";
export default {
  name: "EntryDay",
  components: { tableDay },
};
</script>
<style lang=""></style>
