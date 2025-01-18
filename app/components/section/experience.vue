<script lang="ts" setup>
type Experience = {
  time: {
    start: string;
    end: string;
  };
  position: string;
  company: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    time: {
      start: "August 2021",
      end: "May 2025",
    },
    position: "Mathematics Tutor",
    company: "Texas A&M University",
    description: [
      "Facilitated student mastery of mathematics by tutoring on topics ranging from algebra to calculus.",
      "Enhanced learning outcomes through customized lesson plans tailored to individual student goals.",
      "Fostered academic growth by regularly assessing student progress and providing constructive feedback.",
      "Elevated student engagement by incorporating interactive activities to reinforce mathematical concepts.",
      "Promoted independent learning by developing an online course platform with relevant resources.",
    ],
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

        <div>
          <div v-for="description in experience.description" :key="description">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
