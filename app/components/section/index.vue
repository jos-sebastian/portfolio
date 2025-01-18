<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <h3 v-if="title" class="top-0 px-0 py-3 font-bold uppercase">
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<style></style>
