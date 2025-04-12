<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Institutes</h1>
    </div>

    <div><tableInstitutes /></div>
  </div>
</template>
<script>
import tableInstitutes from "./table/table-institutes.vue";
export default {
  name: "EntryInstitutesTable",
  components: { tableInstitutes },
};
</script>
<style lang=""></style>
