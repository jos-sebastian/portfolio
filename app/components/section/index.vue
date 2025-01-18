<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div
      v-if="title"
      class="bg-[var(--ui-bg)] sticky top-0 uppercase font-bold"
    >
      {{ title }}
    </div>

    <slot />
  </div>
</template>

<style></style>
