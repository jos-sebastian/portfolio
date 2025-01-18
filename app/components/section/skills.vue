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
    <div>
      <div v-for="skill in skills" :key="skill.skill">
        <div>{{ skill.skill }}</div>
        <div>
          <div v-for="subskill in skill.subskills" :key="subskill">
            {{ subskill }}
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
