<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null);

const VERT = /* glsl */ `
  attribute vec2 a_pos;
  varying vec2 v_uv;
  void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2  u_res;
  uniform vec2  u_mouse;

  /* ── noise ── */
  float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 17.5);
    return fract(p.x * p.y);
  }

  float hash2(vec2 p) {
    p = fract(p * vec2(443.8975, 397.2973));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),                  hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p  = p * 2.07 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  /* ── circle mask with wavy edge ── */
  float circleMask(vec2 uv, vec2 center, float radius) {
    return smoothstep(radius, radius - 0.015, distance(uv, center));
  }

  void main() {
    vec2 uv = v_uv;
    /* correct for aspect ratio so the circle stays round */
    float aspect = u_res.x / u_res.y;
    vec2 uvA = vec2(uv.x * aspect, uv.y);
    vec2 cA  = vec2(0.5 * aspect, 0.5);

    float t = u_time;

    /* wave distortion driven by mouse direction */
    vec2 toMouse = normalize(u_mouse - 0.5);
    float wave =
      sin(uv.x * 14.0 + t * 0.9)  * 0.025 +
      sin(uv.y * 20.0 - t * 0.65) * 0.018;

    vec2 warpedA = uvA + toMouse * wave * 0.3;

    /* wavy circle edge */
    float mask = circleMask(warpedA, cA, 0.30 + wave * 0.6);

    /* ── purple grain inside the mask ── */
    float slow = t * 0.018;
    vec2 p = vec2(uv.x * aspect, uv.y);
    vec2 q = vec2(fbm(p + slow), fbm(p + vec2(2.1, 5.3) + slow * 0.6));
    vec2 r = vec2(fbm(p + 1.4 * q), fbm(p + 1.4 * q + vec2(7.1, 3.4)));
    float n = fbm(p + 1.6 * r + slow * 0.05);

    vec3 base = vec3(0.048, 0.028, 0.068);
    vec3 glow = vec3(0.38, 0.10, 0.70);
    vec3 inner = mix(base, glow, smoothstep(0.28, 0.70, n) * 0.75);

    /* film grain – flickers every frame */
    float g = mix(
      hash2(gl_FragCoord.xy + fract(t * 6271.0)),
      hash(gl_FragCoord.xy  + fract(t * 7919.0)),
      0.35
    );
    inner = clamp(inner + (g - 0.5) * 0.18, 0.0, 1.0);

    /* outside the circle: site background #0d0d0d */
    vec3 bg  = vec3(0.051, 0.051, 0.051);
    vec3 col = mix(bg, inner, mask);

    gl_FragColor = vec4(col, 1.0);
  }
`;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const gl = canvas.getContext("webgl");
  if (!gl) return;

  function mkShader(type: number, src: string) {
    const s = gl!.createShader(type)!;
    gl!.shaderSource(s, src);
    gl!.compileShader(s);
    return s;
  }

  const prog = gl.createProgram()!;
  gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const posLoc = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const uTime  = gl.getUniformLocation(prog, "u_time");
  const uRes   = gl.getUniformLocation(prog, "u_res");
  const uMouse = gl.getUniformLocation(prog, "u_mouse");

  /* mouse: default to centre */
  let mx = 0.5, my = 0.5;

  function onMouseMove(e: MouseEvent) {
    const rect = canvas!.getBoundingClientRect();
    mx = (e.clientX - rect.left) / rect.width;
    my = 1.0 - (e.clientY - rect.top) / rect.height;
  }

  window.addEventListener("mousemove", onMouseMove);

  function resize() {
    canvas!.width  = canvas!.clientWidth  * devicePixelRatio;
    canvas!.height = canvas!.clientHeight * devicePixelRatio;
    gl!.viewport(0, 0, canvas!.width, canvas!.height);
    gl!.uniform2f(uRes, canvas!.width, canvas!.height);
  }

  resize();
  window.addEventListener("resize", resize);

  const start = performance.now();
  let animId: number;

  function render() {
    gl!.uniform1f(uTime, (performance.now() - start) / 1000);
    gl!.uniform2f(uMouse, mx, my);
    gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    animId = requestAnimationFrame(render);
  }

  render();

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
  });
});
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 h-full w-full pointer-events-none" />
</template>
