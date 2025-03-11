<script lang="ts" setup></script>

<template>
  <div class="h-full w-full overflow-auto">
    <CoreCube />
    <CoreArt />

    <div
      class="absolute flex h-fit w-full flex-col items-center justify-normal md:flex-row md:items-start md:justify-center"
    >
      <CoreLeft class="h-full min-h-fit w-full max-w-96 md:sticky md:top-0" />
      <CoreRight class="h-full min-h-fit w-full max-w-144 md:static md:top-0" />
    </div>
  </div>
</template>

<style></style>
