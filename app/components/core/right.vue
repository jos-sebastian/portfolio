<script lang="ts" setup>
const description = portfolio.about.description;
</script>

<template>
  <div class="flex flex-col gap-6 p-6 md:py-24 md:pr-12 md:pl-6" id="about">
    <div class="text-lg">
      {{ description }}
    </div>

    <PortfolioEducation />
    <PortfolioExperience />
    <PortfolioSkills />
    <PortfolioProjects />
  </div>
</template>

<style></style>
