import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('threeCanvas');
if (!canvas) throw new Error('no canvas');

const isMobile = window.innerWidth < 768;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
camera.position.set(3.4, 1.7, 3.6);
camera.lookAt(0, 0.55, 0);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
renderer.shadowMap.enabled = false;

const hemi = new THREE.HemisphereLight(0x405070, 0x151820, 0.9);
scene.add(hemi);

const key = new THREE.DirectionalLight(0xffffff, 1.4);
key.position.set(4, 6, 3);
scene.add(key);

const rim = new THREE.DirectionalLight(0x4d7fff, 0.7);
rim.position.set(-4, 2, -3);
scene.add(rim);

const accent = new THREE.PointLight(0xff3c1f, 30, 12);
accent.position.set(2.5, 1.6, 2);
scene.add(accent);

const accent2 = new THREE.PointLight(0xff3c1f, 14, 8);
accent2.position.set(-2.2, 0.8, -1.5);
scene.add(accent2);

const bodyRed = new THREE.MeshStandardMaterial({ color: 0xd62220, metalness: 0.5, roughness: 0.35 });
const white = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, metalness: 0.25, roughness: 0.4 });
const dark = new THREE.MeshStandardMaterial({ color: 0x1a1d24, metalness: 0.4, roughness: 0.5 });
const gold = new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 0.9, roughness: 0.25 });
const chrome = new THREE.MeshStandardMaterial({ color: 0xcfd4dd, metalness: 0.95, roughness: 0.18 });
const glass = new THREE.MeshStandardMaterial({ color: 0x141821, metalness: 0.6, roughness: 0.1, transparent: true, opacity: 0.55 });
const glowWhite = new THREE.MeshStandardMaterial({ color: 0xeaf4ff, emissive: 0xbfe3ff, emissiveIntensity: 1.8 });
const glowRed = new THREE.MeshStandardMaterial({ color: 0xff5040, emissive: 0xff2a18, emissiveIntensity: 2.2 });

const bike = new THREE.Group();

function wheel(z, radius) {
  const g = new THREE.Group();
  const tire = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.09, 14, 28), dark);
  tire.rotation.y = Math.PI / 2;
  g.add(tire);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.1, 14), dark);
  hub.rotation.z = Math.PI / 2;
  g.add(hub);
  for (let i = 0; i < 5; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.045, radius * 1.45, 0.045), dark);
    spoke.position.y = radius * 0.72;
    spoke.rotation.x = (i / 5) * Math.PI * 2;
    g.add(spoke);
  }
  const rimRing = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.022, 8, 28), bodyRed);
  rimRing.rotation.y = Math.PI / 2;
  g.add(rimRing);
  g.position.set(0, radius, z);
  return g;
}

const frontWheel = wheel(0.55, 0.4);
const rearWheel = wheel(-0.6, 0.4);
bike.add(frontWheel);
bike.add(rearWheel);

// Red trellis backbone + swingarm
const backbone = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.26, 1.05), bodyRed);
backbone.position.set(0, 0.6, -0.1);
bike.add(backbone);

const swingarm = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.09, 0.45), bodyRed);
swingarm.position.set(0, 0.6, -0.38);
bike.add(swingarm);

// Gold USD forks + top clamp
const forkTilt = 0.2;
[-0.09, 0.09].forEach((x) => {
  const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.026, 0.62, 10), gold);
  fork.position.set(x, 0.78, 0.55);
  fork.rotation.x = forkTilt;
  bike.add(fork);
});
const topClamp = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.08), chrome);
topClamp.position.set(0, 1.06, 0.74);
topClamp.rotation.x = forkTilt;
bike.add(topClamp);

// Front cowl nose
const nose = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), bodyRed);
nose.scale.set(0.92, 0.9, 1.35);
nose.position.set(0, 0.95, 0.62);
bike.add(nose);

const windscreen = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.03), glass);
windscreen.position.set(0, 1.18, 0.72);
windscreen.rotation.x = -0.4;
bike.add(windscreen);

// Twin "demon-eye" headlights
[-0.075, 0.075].forEach((x) => {
  const housing = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.1, 0.12), dark);
  housing.position.set(x, 0.95, 0.92);
  bike.add(housing);
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.04), glowWhite);
  beam.position.set(x, 0.95, 0.98);
  bike.add(beam);
});

// Side fairing with white lower accent
[-0.24, 0.24].forEach((x) => {
  const side = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.26, 1.0), bodyRed);
  side.position.set(x, 0.78, -0.05);
  side.rotation.z = x > 0 ? -0.22 : 0.22;
  bike.add(side);
  const lower = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.2, 0.75), white);
  lower.position.set(x, 0.56, -0.05);
  lower.rotation.z = x > 0 ? -0.22 : 0.22;
  bike.add(lower);
});

// Angular tank with white stripe
const tank = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.26, 0.64), bodyRed);
tank.position.set(0, 0.97, 0.26);
bike.add(tank);
const tankStripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.5), white);
tankStripe.position.set(0, 1.1, 0.26);
bike.add(tankStripe);
const tankTop = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.42), bodyRed);
tankTop.position.set(0, 1.13, 0.2);
bike.add(tankTop);

// Seat + raised tail with LED strip
const seat = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.09, 0.5), dark);
seat.position.set(0, 1.1, -0.3);
bike.add(seat);
const tail = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.4), bodyRed);
tail.position.set(0, 1.18, -0.7);
tail.rotation.x = 0.12;
bike.add(tail);
const tailLed = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.04), glowRed);
tailLed.position.set(0, 1.3, -0.9);
tailLed.rotation.x = 0.12;
bike.add(tailLed);

// Belly pan
const belly = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.16, 0.9), dark);
belly.position.set(0, 0.44, -0.05);
bike.add(belly);

// Underbelly exhaust + muffler can
const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.55, 10), chrome);
exhaust.position.set(0.2, 0.66, -0.5);
exhaust.rotation.x = -0.85;
bike.add(exhaust);
const muffler = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, 0.34), dark);
muffler.position.set(0.2, 0.5, -0.6);
muffler.rotation.x = 0.15;
bike.add(muffler);

// Mirrors
[-0.14, 0.14].forEach((x) => {
  const stem = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.16, 0.02), chrome);
  stem.position.set(x, 1.24, 0.86);
  bike.add(stem);
  const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.02), dark);
  mirror.position.set(x, 1.32, 0.84);
  bike.add(mirror);
});

// Rear plate
const plate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.15, 0.02), dark);
plate.position.set(0, 0.52, -0.92);
plate.rotation.x = 0.14;
bike.add(plate);

bike.position.y = 0;

const platform = new THREE.Mesh(
  new THREE.CylinderGeometry(2.2, 2.3, 0.07, 72),
  new THREE.MeshStandardMaterial({ color: 0x14161c, metalness: 0.85, roughness: 0.3 })
);
platform.position.y = -0.41;
scene.add(platform);

const ringAccent = new THREE.Mesh(
  new THREE.TorusGeometry(2.1, 0.02, 8, 80),
  new THREE.MeshStandardMaterial({ color: 0xff3c1f, emissive: 0xff3c1f, emissiveIntensity: 1.4 })
);
ringAccent.rotation.x = Math.PI / 2;
ringAccent.position.y = -0.375;
scene.add(ringAccent);

scene.add(bike);

const mouse = { x: 0, y: 0 };
let targetRotY = 0;
let targetRotX = 0;

window.addEventListener('pointermove', (e) => {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

const clock = new THREE.Clock();

let visible = true;
if ('IntersectionObserver' in window) {
  new IntersectionObserver(
    ([entry]) => { visible = entry.isIntersecting; },
    { threshold: 0 }
  ).observe(canvas);
}

function animate() {
  requestAnimationFrame(animate);
  if (!visible) return;

  const t = clock.getElapsedTime();

  platform.rotation.y += 0.003;
  ringAccent.rotation.z += 0.003;

  bike.rotation.y = t * 0.45;
  bike.position.y = Math.sin(t * 1.4) * 0.03;

  const rotBase = t * 0.45;
  targetRotY = rotBase + mouse.x * 0.45;
  targetRotX = mouse.y * 0.12;
  bike.rotation.y += (targetRotY - bike.rotation.y) * 0.08;
  bike.rotation.x += (targetRotX - bike.rotation.x) * 0.08;

  frontWheel.rotation.x = t * 3;
  rearWheel.rotation.x = t * 3;

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
});
