<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Salutation</h1>
    </div>

    <div><tableSalutation /></div>
  </div>
</template>
<script>
import tableSalutation from "./table/table-salutation.vue";
export default {
  name: "MMaintenanceSalutationTable",
  components: { tableSalutation },
};
</script>
<style lang=""></style>
