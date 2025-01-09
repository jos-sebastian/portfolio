<script lang="ts" setup>
const { title } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div>
    <div v-if="title">
      {{ title }}
    </div>

    <slot />
  </div>
</template>

<style></style>
