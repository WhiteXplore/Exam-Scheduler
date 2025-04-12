<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Exam Scheduled</h1>
    </div>

    <div>
      <tableExam />
    </div>
  </div>
</template>
<script>
import tableExam from "./table/table-exam.vue";
export default {
  name: "ExamSchedulePage",
  components: {
    tableExam,
  },
};
</script>
<style lang=""></style>
