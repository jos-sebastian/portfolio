<script lang="ts" setup>
const projects = portfolio.projects;
</script>

<template>
  <Section title="Projects">
    <div class="flex flex-col gap-1.5">
      <div v-for="project in projects" :key="project.project">
        <div class="font-bold">{{ project.project }}</div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </Section>
</template>

<style></style>
