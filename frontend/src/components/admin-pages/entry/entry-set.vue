<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Set</h1>
    </div>

    <div><tableSet /></div>
  </div>
</template>
<script>
import tableSet from "./table/table-set.vue";
export default {
  name: "EntrySetTable",
  components: { tableSet },
};
</script>
<style lang=""></style>
