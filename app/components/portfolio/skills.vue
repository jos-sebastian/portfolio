<script lang="ts" setup>
const skills = portfolio.skills;
</script>

<template>
  <Section title="Skills">
    <div class="flex flex-col gap-1.5">
      <div v-for="skill in skills" :key="skill.skill">
        <span class="font-bold">{{ skill.skill }}</span>
        <span v-if="skill.subskills.length"> · </span>

        <span v-for="subskill in skill.subskills" :key="subskill">
          <span v-if="subskill !== skill.subskills[0]">, </span>
          <span>{{ subskill }}</span>
        </span>
      </div>
    </div>
  </Section>
</template>

<style></style>
