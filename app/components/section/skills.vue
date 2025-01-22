<script lang="ts" setup>
const skills: Skill[] = [
  {
    skill: "C/C++",
    subskills: ["OpenGL", "GLSL", "Vulkan", "CUDA"],
  },
  {
    skill: "Python",
    subskills: ["PyTorch", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    skill: "Rust",
    subskills: ["Tauri"],
  },
  {
    skill: "SQL",
    subskills: ["PostgreSQL"],
  },
  {
    skill: "JavaScript",
    subskills: ["React", "Vue", "NodeJS", "TypeScript", "WebGL", "WebGPU"],
  },
  {
    skill: "HTML",
    subskills: [],
  },
  {
    skill: "CSS",
    subskills: ["TailwindCSS"],
  },
  {
    skill: "Git",
    subskills: ["GitHub"],
  },
];
</script>

<template>
  <Section title="Skills">
    <div class="flex flex-col gap-1.5">
      <div v-for="skill in skills" :key="skill.skill">
        <span class="font-bold">{{ skill.skill }}</span>
        <span v-if="skill.subskills.length"> · </span>
        <span>
          <span v-for="subskill in skill.subskills" :key="subskill">
            <span v-if="subskill !== skill.subskills[0]">, </span>
            <span>{{ subskill }}</span>
          </span>
        </span>
      </div>
    </div>
  </Section>
</template>

<style></style>
