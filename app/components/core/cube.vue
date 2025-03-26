<script lang="ts" setup>
const art = useArt();
const progress = art.progress;
watch(
  () => progress.value,
  (value) => {
    if (value === 1) {
      setTimeout(() => {
        show.value = true;
      }, 100);
    }
  },
);

const show = ref(false);
const dots = [".", ".", "."];
</script>

<template>
  <div
    class="fixed z-30 flex h-full w-full items-center justify-center bg-white text-6xl font-semibold dark:bg-black"
    v-if="!show"
  >
    <span>Loading</span>
    <span
      v-for="(dot, index) in dots"
      :key="index"
      class="dot"
      :style="{ animationDelay: `${index * 0.3}s` }"
    >
      {{ dot }}
    </span>
  </div>
</template>

<style scoped>
.dot {
  animation: bounce 1.5s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>
