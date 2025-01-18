<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div class="uppercase font-bold" v-if="title">
      {{ title }}
    </div>

    <slot />
  </div>
</template>

<style></style>
