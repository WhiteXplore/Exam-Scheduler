<template>
  <div class="p-6 py-4 text-gray-700'">
    <div>
      <h1 class="font-semibold">Room</h1>
    </div>

    <div><tableRoom /></div>
  </div>
</template>
<script>
import tableRoom from "./table/table-room.vue";
export default {
  name: "EntryRoomTable",
  components: { tableRoom },
};
</script>
<style lang=""></style>
