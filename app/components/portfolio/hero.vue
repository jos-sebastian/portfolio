<script lang="ts" setup>
const about = portfolio.about;

const sections = [
  { title: "About", link: "#about" },
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];
</script>

<template>
  <Section>
    <div
      class="flex h-screen w-full items-center justify-center md:items-baseline md:py-24 md:pr-6 md:pl-12"
    >
      <div class="flex h-fit w-fit flex-col gap-9">
        <div class="text-center md:text-left">
          <h1 class="text-5xl font-bold md:text-6xl">{{ about.name }}</h1>
          <h2 class="text-3xl font-semibold md:text-3xl">{{ about.title }}</h2>
        </div>

        <div
          class="flex flex-col items-center gap-1.5 text-sm font-semibold uppercase md:items-baseline"
        >
          <NuxtLink v-for="section in sections" :key="section.title" :to="section.link">
            {{ section.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
