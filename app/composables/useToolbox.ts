import { gsap } from "gsap";
import { scramble } from "~/utils/scramble";

export const categories = [
  { label: "Frameworks",         tools: ["Vue.js", "Nuxt.js", "Astro.js"] },
  { label: "Styling",            tools: ["Tailwind CSS", "GSAP", "GLSL / WebGL"] },
  { label: "Libraries",          tools: ["Vitest", "Formkit", "Zod"] },
  { label: "Content Management", tools: ["Storyblok", "Sanity.io", "Webflow"] },
  { label: "Design",             tools: ["Figma", "Design Systems", "Typografie"] },
  { label: "Tooling",            tools: ["Supabase", "GitHub", "Tower", "Cursor", "Claude"] },
];

export function useToolbox() {
  const activeIndex = ref<number | null>(null);
  // Typed as object[] to avoid HTMLElement version conflicts between Vue and DOM types.
  // GSAP accepts any object as an animation target.
  const titleRefs = ref<object[]>([]);
  const detailRefs = ref<object[]>([]);
  const toolRefs = ref<Record<number, object[]>>({});

  function resolveEl(el: unknown): object | null {
    if (el && typeof el === "object") {
      if ("nodeType" in el) return el;
      if ("$el" in el && el.$el && typeof el.$el === "object") return el.$el as object;
    }
    return null;
  }

  // ── Ref setters ────────────────────────────────────────────────────────────
  function setTitleRef(el: unknown, i: number) {
    const domEl = resolveEl(el);
    if (domEl) titleRefs.value[i] = domEl;
  }

  function setDetailRef(el: unknown, i: number) {
    const domEl = resolveEl(el);
    if (domEl) detailRefs.value[i] = domEl;
  }

  function setToolRef(el: unknown, catIndex: number, toolIndex: number) {
    const domEl = resolveEl(el);
    if (!domEl) return;
    if (!toolRefs.value[catIndex]) toolRefs.value[catIndex] = [];
    toolRefs.value[catIndex][toolIndex] = domEl;
  }

  // ── Accordion animation ────────────────────────────────────────────────────
  function animateItem(i: number, open: boolean) {
    const title = titleRefs.value[i];
    const detail = detailRefs.value[i];
    if (!title || !detail) return;

    gsap.killTweensOf([title, detail]);

    if (open) {
      gsap.to(title, { fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)", opacity: 1, x: 0, duration: 0.45, ease: "power3.out" });
      gsap.to(detail, { height: (detail as HTMLElement).scrollHeight, opacity: 1, duration: 0.45, ease: "power3.out", delay: 0.05 });
    } else {
      gsap.to(title, { fontSize: "0.85rem", opacity: 0.2, x: 8, duration: 0.35, ease: "power2.in" });
      gsap.to(detail, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }

  function toggle(i: number) {
    const prev = activeIndex.value;
    const next = prev === i ? null : i;

    if (prev !== null) animateItem(prev, false);
    if (next !== null) animateItem(next, true);

    activeIndex.value = next;
  }

  // ── Hover ──────────────────────────────────────────────────────────────────
  function onMouseEnter(i: number) {
    titleRefs.value.forEach((title, j) => {
      if (!title) return;
      const isActive = activeIndex.value === j;
      const isHovered = j === i;
      if (isHovered && !isActive) gsap.to(title, { opacity: 0.5, duration: 0.2, ease: "power2.out" });
      else if (!isActive) gsap.to(title, { opacity: 0.08, duration: 0.2, ease: "power2.out" });
      else gsap.to(title, { opacity: 0.75, duration: 0.2, ease: "power2.out" });
    });
  }

  function onMouseLeave(_i: number) {
    titleRefs.value.forEach((title, j) => {
      if (!title) return;
      gsap.to(title, { opacity: activeIndex.value === j ? 1 : 0.2, duration: 0.2, ease: "power2.in" });
    });
  }

  // ── Scramble on open ───────────────────────────────────────────────────────
  watch(activeIndex, (next) => {
    if (next === null) return;
    const refs = toolRefs.value[next];
    if (!refs) return;
    categories[next]?.tools.forEach((tool, i) => {
      if (refs[i]) scramble(refs[i] as HTMLElement, tool, i * 90);
    });
  });

  // ── Initial GSAP state ─────────────────────────────────────────────────────
  onMounted(() => {
    categories.forEach((_, i) => {
      const title = titleRefs.value[i];
      const detail = detailRefs.value[i];
      if (!title || !detail) return;
      gsap.set(title, { fontSize: "0.85rem", opacity: 0.2, x: 8 });
      gsap.set(detail, { height: 0, opacity: 0 });
    });
  });

  return { categories, activeIndex, setTitleRef, setDetailRef, setToolRef, toggle, onMouseEnter, onMouseLeave };
}
