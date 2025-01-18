<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div
      v-if="title"
      class="px-0 py-3 bg-[var(--ui-bg)] sticky top-0 uppercase font-bold"
    >
      {{ title }}
    </div>

    <slot />
  </div>
</template>

<style></style>
