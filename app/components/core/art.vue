<script lang="ts" setup>
const mouse = ref({
  x: 0,
  y: 0,
});

const updateMousePosition = (event: MouseEvent) => {
  mouse.value.x = event.clientX;
  mouse.value.y = event.clientY;
};

onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePosition);
});
</script>

<template>
  <div
    class="fixed -z-20 h-full w-full bg-gradient-to-b from-white to-indigo-300"
  >
    <div
      class="absolute h-144 w-144 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/30 blur-3xl"
      :style="{
        transform: `translate(${mouse.x}px, ${mouse.y}px)`,
        transition: 'transform 0.3s ease-out',
      }"
    />
  </div>
</template>

<style></style>
