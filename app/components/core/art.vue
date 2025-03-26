<script lang="ts" setup>
import WebGLFluidEnhanced from "~/assets/script/index";

const art = useArt();
const canvas = art.canvas;
const progress = art.progress;

let mouse = {
  x: 0,
  y: 0,
};

const simulation = ref<WebGLFluidEnhanced | null>(null);
onMounted(async () => {
  const container = document.getElementById("container")!;
  simulation.value = new WebGLFluidEnhanced(container);
  simulation.value.setConfig({
    pressure: 0.5,
    splatRadius: 0.75,
    brightness: 0.025,
    backgroundColor: "#ffffff",
    bloom: false,
    sunrays: false,
  });
  const ids = ["hero", "education", "experience", "skills", "projects"];
  const elements = ids.map((id) => document.getElementById(id)!);

  simulation.value.start();
  progress.value = 1;

  const animate = () => {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (!element) continue;
      const rect = element.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const dx = Math.random() * 2 - 1;
      const dy = Math.random() * 2 - 1;
      simulation.value?.splatAtLocation(x, y, dx * 15, dy * 15, "#3F00FF");
    }
    requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
});
</script>

<template>
  <div id="container" class="fixed -z-30 h-full w-full">
    <canvas ref="canvas" class="h-full w-full bg-black" />
  </div>
</template>
