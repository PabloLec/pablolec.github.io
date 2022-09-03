import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
let camera, scene, renderer, mixer;

const clock = new THREE.Clock();
const manager = new THREE.LoadingManager();
manager.onLoad = function () {
  isModelLoaded = true;
  _3dOpen();
};
manager.onError = function (url) {
  console.log("There was an error loading " + url);
};
const loader = new FBXLoader(manager);
var isModelLoaded = false;
var isModalClosedByUser = false;

function start() {
  loadAll();
  animate();
}

function loadAll() {
  const container = document.getElementById("_3d-container");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(0, -300, 150);

  scene = new THREE.Scene();

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, -400, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(200, 0, 100);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 180;
  dirLight.shadow.camera.bottom = -100;
  dirLight.shadow.camera.left = -120;
  dirLight.shadow.camera.right = 120;
  scene.add(dirLight);

  loadModel();

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 100);
  controls.minDistance = 177;
  controls.maxDistance = 1850;
  controls.update();

  function onPositionChange(evt) {
    var control = evt.target;
    console.log(control);
    console.log(control.target);
    console.log(control.object.position);
    console.log("DISTANCE:" + control.getDistance());
  }

  controls.addEventListener("change", onPositionChange);

  window.addEventListener("resize", onWindowResize);
}

function loadModel() {
  let fbx = "/src/models/me.fbx";

  loader.load(fbx, function (object) {
    mixer = new THREE.AnimationMixer(object);

    const action = mixer.clipAction(object.animations[0]);
    action.play();

    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.add(object);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  renderer.render(scene, camera);
}

// State management

var _3dCloseElements = document.getElementsByClassName("_3d-close");
for (var i = 0; i < _3dCloseElements.length; i++) {
  _3dCloseElements[i].addEventListener("click", function (e) {
    isModalClosedByUser = true;
    e.stopPropagation();
    e.preventDefault();
    _3dClose();
  });
}

document.getElementById("_3d-open").addEventListener("click", function (e) {
  isModalClosedByUser = false;
  e.stopPropagation();
  e.preventDefault();
  _3dOpen();
});

function _3dOpen() {
  if (isModalClosedByUser) return;

  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  if (isModelLoaded) {
    document.getElementById("_3d-loading").style.display = "none";
    document.getElementById("_3d-container").style.display = "block";
  } else {
    document.getElementById("_3d-loading").style.display = "flex";
    start();
  }
}

function _3dClose() {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementById("_3d-container").style.display = "none";
  document.getElementById("_3d-loading").style.display = "none";
}
