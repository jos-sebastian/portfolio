<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import vertex from "~/assets/shader/vertex.glsl?raw";
import fragment from "~/assets/shader/fragment.glsl?raw";

const art = useArt();
const canvas = art.canvas;
const progress = art.progress;

onMounted(() => {
  const clock = new THREE.Clock();

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvas.value,
  });
  renderer.setAnimationLoop(animate);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  let aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100);
  camera.position.set(0, 0, 1);

  const controls = new OrbitControls(camera, renderer.domElement);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(2 * aspect, 2, 1);
  scene.add(mesh);

  function animate() {
    const time = clock.getElapsedTime();
    const delta = clock.getDelta();
    controls.update(delta);

    renderer.render(scene, camera);
  }

  window.addEventListener("resize", (event) => {
    aspect = window.innerWidth / window.innerHeight;
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();

    mesh.scale.set(2 * aspect, 2, 1);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  progress.value = 1;
});
</script>

<template>
  <div class="fixed -z-30 h-full w-full">
    <canvas class="h-full w-full" ref="canvas" />
  </div>
</template>

<style></style>
