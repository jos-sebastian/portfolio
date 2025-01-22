<script lang="ts" setup>
const sections = [
  { title: "About", link: "/" },
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];
</script>

<template>
  <Section>
    <div class="flex flex-col gap-12">
      <div>
        <h1 class="text-4xl font-bold md:text-5xl">
          <NuxtLink to="/">Jos Sebastian</NuxtLink>
        </h1>
        <h2 class="text-2xl font-semibold md:text-3xl">Computer Engineer</h2>
      </div>

      <div
        class="flex flex-col gap-1.5 text-sm font-semibold uppercase not-md:hidden"
      >
        <NuxtLink
          v-for="section in sections"
          :key="section.title"
          :to="section.link"
          class="hover:underline"
        >
          {{ section.title }}
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>

<style></style>
