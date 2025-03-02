<script lang="ts" setup>
import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  const clock = new THREE.Clock();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  let aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 10);
  camera.position.x = 0;
  camera.position.y = 2 * Math.tan(Math.PI / 6);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvas.value,
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);

  const composer = new EffectComposer(renderer);
  const pixelation = new RenderPixelatedPass(6, scene, camera);
  pixelation.pixelSize = 4;
  composer.addPass(pixelation);
  const pass = new OutputPass();
  composer.addPass(pass);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  function resize() {
    aspect = window.innerWidth / window.innerHeight;
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", resize);

  function animate() {
    const delta = clock.getDelta();
    controls.update(delta);

    renderer.render(scene, camera);
    composer.render();
  }
});
</script>

<template>
  <div class="fixed -z-30 h-full w-full">
    <canvas class="h-full w-full" ref="canvas" />
  </div>
</template>

<style></style>
