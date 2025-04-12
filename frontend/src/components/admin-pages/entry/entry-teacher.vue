<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Teacher</h1>
    </div>

    <div><tableTeacher /></div>
  </div>
</template>
<script>
import tableTeacher from "./table/table-teacher.vue";
export default {
  name: "EntryTeacher",
  components: { tableTeacher },
};
</script>
<style lang=""></style>
