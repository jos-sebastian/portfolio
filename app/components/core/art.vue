<script lang="ts" setup>
import FluidSimulation from "~/assets/script/index";

const colormode = useColorMode();
colormode.preference = "system";

const art = useArt();
art.mode.value = colormode.value;

console.log(colormode.preference);
console.log(colormode.value);
console.log(art.mode.value);

let simulation: FluidSimulation;
onMounted(() => {
  const container = document.getElementById("container")!;

  simulation = new FluidSimulation(container);
  simulation.setConfig({
    pressure: 0.5,
    splatRadius: 0.75,
    brightness: art.mode.value === "dark" ? 0.1 : 0.05,
    backgroundColor: art.mode.value === "dark" ? "#000000" : "#ffffff",
    bloom: false,
    sunrays: false,
  });
  simulation.start();

  art.progress.value = 1;
  const elements = ["hero", "education", "experience", "skills", "projects"].map(
    (id) => document.getElementById(id)!,
  );

  const animate = () => {
    if (art.mode.value !== colormode.value) {
      art.mode.value = colormode.value;
      simulation.setConfig({
        brightness: art.mode.value === "dark" ? 0.1 : 0.05,
        backgroundColor: art.mode.value === "dark" ? "#000000" : "#ffffff",
      });
    }

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (!element) continue;
      const rectangle = element.getBoundingClientRect();
      const x = rectangle.left + rectangle.width / 2;
      const y = rectangle.top + rectangle.height / 2;
      const dx = (Math.random() * 2 - 1) * 15;
      const dy = (Math.random() * 2 - 1) * 15;
      simulation.splatAtLocation(x, y, dx, dy, "#312c85");
    }
    requestAnimationFrame(animate);
  };
  animate();
});
</script>

<template>
  <div id="container" class="fixed -z-30 h-full w-full">
    <canvas class="h-full w-full" />
  </div>
</template>
