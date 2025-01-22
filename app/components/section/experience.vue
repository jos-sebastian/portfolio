<script lang="ts" setup>
type Experience = {
  time: {
    start: string;
    end: string;
  };
  position: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    time: {
      start: "August 2021",
      end: "May 2025",
    },
    position: "Mathematics Tutor",
    company: "Texas A&M University",
    description:
      "Provided tutoring to university students on a wide range of math topics, from algebra to calculus.",
  },
];
</script>

<template>
  <Section title="Experience">
    <div class="flex flex-col gap-1.5">
      <div
        v-for="experience in experiences"
        :key="experience.company + experience.position"
      >
        <div class="text-xs font-bold uppercase">
          {{ experience.time.start }} - {{ experience.time.end }}
        </div>

        <span class="font-bold">{{ experience.position }}</span>
        <span> · </span>
        <span class="inline-block italic">{{ experience.company }}</span>

        <p>{{ experience.description }}</p>
      </div>
    </div>
  </Section>
</template>

<style></style>
