const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

// Replace Chunk 1 (Scene setup)
const start1 = code.indexOf('// Lighting');
const end1 = code.indexOf('scene.add(industriesGroup);') + 'scene.add(industriesGroup);'.length;

const chunk1 = // --- Custom WebGL Fluid Shader (Axiom Style) ---
const uniforms = {
  u_time: { value: 0.0 },
  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  u_scroll: { value: 0.0 }
};

const vertexShader = \\\
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
\\\;

const fragmentShader = \\\
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_scroll;
  varying vec2 vUv;

  // Generic 2D Hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 2D Noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  // FBM (Fractal Brownian Motion)
  float fbm(vec2 p) {
    float f = 0.0;
    float w = 0.5;
    for(int i = 0; i < 5; i++) {
      f += w * noise(p);
      p *= 2.0;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Time and Scroll influence
    float t = u_time * 0.2 + u_scroll * 2.0;

    // Domain warping
    vec2 q = vec2(0.);
    q.x = fbm(st + 0.00 * t);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbm(st + r);

    // Colors mimicking dark matter / liquid aurora
    vec3 color1 = vec3(0.02, 0.02, 0.03); // Deep space dark
    vec3 color2 = vec3(0.1, 0.2, 0.4);    // Rich blue
    vec3 color3 = vec3(0.0, 0.0, 0.0);    // Pitch black
    vec3 color4 = vec3(0.2, 0.15, 0.05);  // Subtle gold

    vec3 color = mix(color1, color2, clamp((f * f) * 4.0, 0.0, 1.0));
    color = mix(color, color3, clamp(length(q), 0.0, 1.0));
    color = mix(color, color4, clamp(length(r.x), 0.0, 1.0));

    // Vignette
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - smoothstep(0.4, 1.0, length(center));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
\\\;

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  depthWrite: false,
  depthTest: false
});

const planeGeometry = new THREE.PlaneGeometry(2, 2); // Full screen quad
const backgroundMesh = new THREE.Mesh(planeGeometry, shaderMaterial);
scene.add(backgroundMesh);;

code = code.substring(0, start1) + chunk1 + code.substring(end1);

// Replace Chunk 2 (Main Timeline)
const start2 = code.indexOf('// Main 3D Scroll Timeline based on sections');
const end2 = code.indexOf('// Trigger results counters & bars animation when reaching results section');

const chunk2 = // Main 3D Scroll Timeline (Updating Shader Uniform)
ScrollTrigger.create({
  trigger: ".scroll-container",
  start: "top top",
  end: "bottom bottom",
  scrub: 1.2,
  onUpdate: (self) => {
    // Smoothly pass scroll progress to the shader
    gsap.to(uniforms.u_scroll, {
      value: self.progress * 10.0,
      duration: 0.5,
      ease: "power2.out"
    });
  }
});

;

code = code.substring(0, start2) + chunk2 + code.substring(end2);

// Replace Chunk 3 (Tick Loop)
const start3 = code.indexOf('function tick() {');
const end3 = code.indexOf('  // Render Scene\\r\\n  renderer.render(scene, camera);') !== -1 ? 
             code.indexOf('  // Render Scene\\r\\n  renderer.render(scene, camera);') : 
             code.indexOf('  // Render Scene\\n  renderer.render(scene, camera);');

const chunk3 = unction tick() {
  const elapsedTime = clock.getElapsedTime();

  // Update Shader Uniforms
  uniforms.u_time.value = elapsedTime;

;

code = code.substring(0, start3) + chunk3 + code.substring(end3);

// Replace Chunk 4 (Resize Handler)
const start4 = code.indexOf('  renderer.setSize(window.innerWidth, window.innerHeight);');
const end4 = code.indexOf('});', start4) + 3;

const chunk4 =   renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Update shader resolution
  if (typeof uniforms !== 'undefined') {
    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }
});;

code = code.substring(0, start4) + chunk4 + code.substring(end4);

fs.writeFileSync('src/main.js', code);
console.log('Successfully updated main.js');
