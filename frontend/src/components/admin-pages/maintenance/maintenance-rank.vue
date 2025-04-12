<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Rank</h1>
    </div>

    <div><tableRank /></div>
  </div>
</template>
<script>
import tableRank from "./table/table-rank.vue";
export default {
  name: "MMaintenanceRankTable",
  components: { tableRank },
};
</script>
<style lang=""></style>
