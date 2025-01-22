<script lang="ts" setup>
const projects: Project[] = [
  {
    project: "Path Tracer",
    description:
      "Developed a high-fidelity path tracing renderer to accurately simulate light physics, modeling global illumination to generate photorealistic images.",
  },
  {
    project: "Graphics Engine",
    description:
      "Created a real-time graphics engine featuring physically-based rendering, emulating complex scenes with realistic lighting, shadows, and materials.",
  },
  {
    project: "Personal Library",
    description:
      "Developed a full-stack, cross-platform application to efficiently track, manage, and organize personal book collections for desktop, mobile, and web platforms.",
  },
];
</script>

<template>
  <Section title="Projects">
    <div class="flex flex-col gap-1.5">
      <div v-for="project in projects" :key="project.project">
        <div class="font-bold">{{ project.project }}</div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </Section>
</template>

<style></style>
