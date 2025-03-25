<script lang="ts" setup>
const projects = portfolio.projects;
</script>

<template>
  <Section title="Projects">
    <div class="flex flex-col gap-3">
      <SectionItem v-for="project in projects" :key="project.project">
        <div class="font-bold">{{ project.project }}</div>
        <p>{{ project.description }}</p>
      </SectionItem>
    </div>
  </Section>
</template>

<style></style>
