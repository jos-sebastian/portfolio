<script lang="ts" setup>
const educations = portfolio.education;
</script>

<template>
  <Section title="Education">
    <div class="flex flex-col gap-1.5">
      <SectionItem
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
      </SectionItem>
    </div>
  </Section>
</template>

<style></style>
