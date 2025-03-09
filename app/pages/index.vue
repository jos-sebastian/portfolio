<script lang="ts" setup></script>

<template>
  <div class="h-full w-full overflow-auto">
    <CoreCube />
    <CoreArt />

    <div
      class="absolute flex flex-col gap-6 p-3 sm:p-9 md:flex-row md:gap-12 md:px-18 md:py-0"
    >
      <CoreLeft class="h-full w-full md:sticky md:top-0 md:items-center" />
      <CoreRight class="h-full w-full md:static md:top-0 md:items-start" />
    </div>
  </div>
</template>
<style></style>
