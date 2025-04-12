<template>
  <div v-if="showNotification" class="fixed top-5 right-5">
    <div class="w-[270px] bg-green-500 text-white rounded-t-lg shadow-lg">
      <div class="p-4">
        <p class="tracking-wider text-md">Successfully Submitted</p>
      </div>
      <div class="progress-bar bg-green-900 w-full h-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmedSubmitPage",
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
      }, 200); // Slight delay before animation starts

      setTimeout(() => {
        this.showNotification = false;
        this.$emit("close"); // Better than reloading the page
      }, 1800);
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
  animation: slide-left 1.5s ease-in-out forwards;
}
</style>
