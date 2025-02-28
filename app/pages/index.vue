<script lang="ts" setup></script>

<template>
  <div class="h-full w-full overflow-auto">
    <CoreArt />

    <div
      class="absolute flex flex-col gap-6 md:gap-12 p-3 md:flex-row md:px-18 md:py-0 sm:p-9"
    >
      <CoreLeft class="h-full w-full md:sticky md:top-0 md:items-center" />
      <CoreRight class="h-full w-full md:static md:top-0 md:items-start" />
    </div>
  </div>
</template>

<style></style>
