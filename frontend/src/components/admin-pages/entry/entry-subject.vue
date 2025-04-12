<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Subject</h1>
    </div>

    <div><tableSubject /></div>
  </div>
</template>
<script>
import tableSubject from "./table/table-subject.vue";
export default {
  name: "EntrySubjectTable",
  components: { tableSubject },
};
</script>
<style lang=""></style>
