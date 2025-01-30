<script lang="ts" setup>
const experiences = portfolio.experiences;
</script>

<template>
  <Section title="Experience">
    <div class="flex flex-col gap-1.5">
      <SectionItem
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
      </SectionItem>
    </div>
  </Section>
</template>

<style></style>
