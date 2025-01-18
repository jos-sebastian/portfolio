<script lang="ts" setup>
type Project = {
  project: string;
  description: string[];
};

const projects: Project[] = [
  {
    project: "Path Tracer",
    description: [
      "Developed a high-fidelity path tracing renderer to accurately simulate light physics, modeling global illumination to generate photorealistic images.",
      "Enhanced efficiency by implementing top-level and bottom-level acceleration structures with bounding volume hierarchies, achieving a 4x speedup in rendering time.",
      "Optimized light simulation with multiple importance sampling to reduce number of samples per pixel while maintaining image clarity, resulting in a 2x improvement in rendering performance.",
      "Improved performance by leveraging parallel processing across CPU threads and GPU compute units, achieving average speedups of 8x on CPU and 32x on GPU.",
      "Refined image quality by applying adaptive median filtering for edge-preserving denoising, leading to greater visual clarity through a 16% reduction in noise.",
    ],
  },
  {
    project: "Graphics Engine",
    description: [
      "Created a real-time graphics engine featuring physically-based rendering, emulating complex scenes with realistic lighting, shadows, and materials.",
      "Amplified quality of reflections, refractions, and overall illumination by incorporating image-based light mapping with high dynamic range images, attaining greater visual realism.",
      "Expanded scene immersion through implementation of screen-space ambient occlusion, leveraging geometric lighting to add additional layers of depth and realism to shadows.",
      "Optimized performance with techniques such as geometry culling and dynamic level-of-detail management, resulting in a 100% speedup in execution time.",
      "Elevated image clarity by implementing multi-sample anti-aliasing, reducing visual artifacts and attaining a 25% increase in image fidelity.",
    ],
  },
  {
    project: "Personal Library",
    description: [
      "Developed a full-stack, cross-platform application to efficiently track, manage, and organize personal book collections for desktop, mobile, and web platforms.",
      "Refined user experience by designing advanced search and filtering functionality, enabling users to quickly locate entries within collections.",
      "Ensured data consistency across platforms by establishing data synchronization, allowing users to access up-to-date information from any device.",
      "Improved performance by utilizing client-side rendering for desktop and mobile platforms and server-side rendering for web platforms, accelerating access and navigation speed.",
      "Expanded accessibility by integrating a wide range of features designed to ensure seamless interaction and intuitive navigation for users of all abilities.",
    ],
  },
];
</script>

<template>
  <Section title="Projects">
    <div>
      <div v-for="project in projects" :key="project.project">
        <div>{{ project.project }}</div>
        <div>
          <div v-for="description in project.description" :key="description">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
