<script lang="ts" setup>
type Education = {
  school: string;
  degree: string;
  discipline: string;
  time: {
    start: string;
    end: string;
  };
};

const educations: Education[] = [
  {
    school: "Texas A&M University",
    degree: "Bachelor of Science",
    discipline: "Computer Engineering",
    time: {
      start: "August 2021",
      end: "May 2025",
    },
  },
];
</script>

<template>
  <Section title="Education">
    <div>
      <div
        v-for="education in educations"
        :key="education.school + education.degree + education.discipline"
      >
        <div>{{ education.school }}</div>
        <div>{{ education.degree }} in {{ education.discipline }}</div>
        <div>{{ education.time.start }} - {{ education.time.end }}</div>
      </div>
    </div>
  </Section>
</template>

<style></style>
