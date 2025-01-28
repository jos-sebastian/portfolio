<script lang="ts" setup></script>

<template>
  <div class="h-full w-full overflow-auto">
    <CoreArt />

    <div class="absolute flex flex-col gap-6 p-3 md:flex-row md:px-24 md:py-0">
      <CoreLeft class="h-full w-full md:sticky md:top-0 md:items-center" />
      <CoreRight class="h-full w-full md:static md:top-0 md:items-start" />
    </div>
  </div>
</template>

<style></style>
