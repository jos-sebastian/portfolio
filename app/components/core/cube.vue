<script lang="ts" setup>
const art = useArt();
const progress = art.progress;
watch(
  () => progress.value,
  (value) => {
    if (value === 1) {
      setTimeout(() => {
        show.value = true;
      }, 1);
    }
  }
);

const show = ref(true);
const dots = [".", ".", "."];
</script>

<template>
  <div
    class="fixed z-30 h-full w-full flex justify-center items-center text-6xl font-semibold bg-white"
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
