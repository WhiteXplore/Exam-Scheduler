<template>
  <div v-if="showNotification" class="fixed top-5 right-5">
    <div class="w-[270px] bg-red-500 text-white rounded-t-lg shadow-lg">
      <div class="p-4">
        <p class="tracking-wider text-md">Successfully Deleted</p>
      </div>
      <div class="progress-bar bg-red-900 w-full h-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmedDeletePage",
  data() {
    return {
      showNotification: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$el
          .querySelector(".progress-bar")
          .classList.add("animate-progress");
      }, 100); // Start animation right after mounting

      setTimeout(() => {
        this.showNotification = false;
        setTimeout(() => {}, 400);
      }, 2000);
    });
  },
};
</script>

<style>
@keyframes slide-left {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

.animate-progress {
  animation: slide-left 1.5s linear forwards;
}
</style>
