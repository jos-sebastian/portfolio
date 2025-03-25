<script lang="ts" setup>
const art = useArt();
const canvas = art.canvas;
const progress = art.progress;

onMounted(() => {
  progress.value = 1;
});
</script>

<template>
  <div class="fixed -z-30 h-full w-full">
    <canvas class="h-full w-full" ref="canvas" />
  </div>
</template>

<style></style>
