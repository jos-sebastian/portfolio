<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <h3
      v-if="title"
      class="px-0 py-3 bg-[var(--ui-bg)] sticky top-0 uppercase font-bold"
    >
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<style></style>
