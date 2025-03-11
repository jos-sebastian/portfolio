<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const art = useArt();
const canvas = art.canvas;

onMounted(() => {
  const clock = new THREE.Clock();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  let aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100);
  camera.position.set(9, 9, 9);

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
  const pixelator = new RenderPixelatedPass(8, scene, camera);
  composer.addPass(pixelator);
  const pass = new OutputPass();
  composer.addPass(pass);

  const controls = new OrbitControls(camera, renderer.domElement);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const sphere_geometry = new THREE.SphereGeometry(1, 16, 16);
  const plane_geometry = new THREE.PlaneGeometry(16, 16);
  const box_geometry = new THREE.BoxGeometry(1, 1, 1);

  const ambient = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(ambient);

  const point = new THREE.PointLight(0xffffff, 30);
  point.castShadow = true;
  scene.add(point);

  const point_intersection = new THREE.Mesh(sphere_geometry, material);
  point_intersection.position.set(1.5, 1.5, 1.5);
  point_intersection.scale.set(3, 3, 3);
  point_intersection.lookAt(camera.position);

  const cube = new THREE.Mesh(box_geometry, material);
  cube.scale.set(2 / 3, 2 / 3, 2 / 3);
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);

  const cube_intersection = new THREE.Mesh(plane_geometry, material);
  cube_intersection.rotateX(-Math.PI / 2);

  function resize() {
    aspect = window.innerWidth / window.innerHeight;
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", resize);

  function pointermove(event: PointerEvent) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(point_intersection);
    if (intersects.length > 0) {
      const direction = intersects[0]!.point.clone().sub(cube.position).normalize();
      const position = cube.position.clone().add(direction.multiplyScalar(3.3));
      point.position.copy(position);
    }
  }
  window.addEventListener("pointermove", pointermove, false);

  const hero = document.getElementById("hero");
  let setup = false;

  function animate() {
    const time = clock.getElapsedTime();
    const delta = clock.getDelta();
    controls.update(delta);

    const rectangle = hero!.getBoundingClientRect();
    const center = new THREE.Vector2(
      rectangle.left + rectangle.width / 2,
      rectangle.top + rectangle.height / 2,
    );
    pointer.x = (center.x / window.innerWidth) * 2 - 1;
    pointer.y = -(center.y / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    let intersects = raycaster.intersectObject(cube_intersection);
    if (intersects.length > 0) {
      cube.position.copy(intersects[0]!.point);
    }

    cube.rotation.y = time * 0.5;

    if (!setup) {
      setup = true;
      point.position.copy(cube.position);
      point.position.x += 0.5;
      point.position.y += 3;
      point.position.z += 1.5;
    }

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
