<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <h3
      v-if="title"
      :id="title.toLowerCase()"
      class="top-0 px-0 py-3 text-xl font-bold uppercase md:text-2xl"
    >
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<style></style>
