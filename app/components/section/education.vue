<script lang="ts" setup>
const educations: Education[] = [
  {
    time: {
      start: "August 2021",
      end: "May 2025",
    },
    degree: "Bachelor of Science",
    discipline: "Computer Engineering",
    school: "Texas A&M University",
  },
];
</script>

<template>
  <Section title="Education">
    <div class="flex flex-col gap-1.5">
      <div
        v-for="education in educations"
        :key="education.school + education.degree + education.discipline"
      >
        <div class="text-xs font-bold uppercase">
          {{ education.time.start }} - {{ education.time.end }}
        </div>

        <div>
          <span class="font-bold">
            {{ education.degree }} in {{ education.discipline }}
          </span>
          <span> · </span>
          <span class="inline-block italic">{{ education.school }}</span>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
