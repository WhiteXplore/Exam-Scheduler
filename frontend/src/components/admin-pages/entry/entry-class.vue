<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Class</h1>
    </div>

    <div><tableEntryClass /></div>
  </div>
</template>
<script>
import tableEntryClass from "./table/table-entry-class.vue";
export default {
  name: "EntryClassTable",
  components: { tableEntryClass },
};
</script>
<style lang=""></style>
