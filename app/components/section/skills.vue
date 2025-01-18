<script lang="ts" setup>
type Skill = {
  skill: string;
  subskills: string[];
};

const skills: Skill[] = [
  {
    skill: "C++",
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
        <div class="font-bold">{{ skill.skill }}</div>
        <div class="flex flex-wrap gap-1.5">
          <div v-for="subskill in skill.subskills" :key="subskill">
            {{ subskill }}
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
