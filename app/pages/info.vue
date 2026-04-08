<script setup lang="ts">
import Heading from "~/components/Heading.vue";
import ExperienceList, {
  type ExperienceItem,
} from "~/components/ExperienceList.vue";

definePageMeta({
  name: "info",
});

usePageMeta({
  title: "Info — Studio Wisse",
  description: "Over Wisse Heida — afgestudeerde CMD'er, frontend developer en designer gevestigd in Heerenveen.",
  ogDescription: "Over Wisse Heida — frontend developer en designer gevestigd in Heerenveen.",
});

const experience: ExperienceItem[] = [
  {
    organisation: "Skeps Internetbureau",
    role: "Support Developer & Frontend Developer",
    period: "feb 2025 - heden · 1 jr 3 mnd",
  },
  {
    organisation: "Skeps Internetbureau",
    role: "Frontend Developer",
    period: "sep 2024 - jan 2025 · 5 maanden",
  },
  {
    organisation: "NHL Stenden Leeuwarden",
    role: "Communication & Multimedia Design",
    period: "sep 2024 - jan 2025 · 5 maanden",
  },
];
</script>

<template>
  <div
    class="relative h-full overflow-y-auto px-10 py-10 flex flex-col items-end justify-between"
  >
    <div class="w-3/4 ml-auto flex flex-col gap-10 items-end text-end">
      <div class="flex flex-col gap-3">
        <p
          class="max-w-prose text-body-lg font-extralight leading-relaxed text-purple-100/70"
        >
          Ik ben Wisse Heida, een afgestudeerde Communication & Multimedia
          Design student van NHL Stenden Leeuwarden, gevestigd in Heerenveen. Ik
          werk op het snijvlak van design en development — van interface design
          tot interactieve webapplicaties.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <span class="text-body-xs uppercase tracking-widest text-purple-400"
          >Wat ik doe</span
        >
        <p
          class="max-w-prose text-body-sm font-extralight leading-relaxed text-purple-100/60"
        >
          Mijn focus ligt op het bouwen van doordachte digitale ervaringen — van
          design systems en component libraries tot creatieve web-experimenten.
          Ik werk voornamelijk met Vue.js / Nuxt, TailwindCSS en GSAP, en heb
          een sterke affiniteit met typografie, animatie en interactieontwerp.
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-3 items-end text-end">
      <Heading
        as="h2"
        class="sr-only text-body-xs uppercase tracking-widest text-purple-400"
      >
        Ervaring
      </Heading>
      <ExperienceList :items="experience" />
    </div>
  </div>
</template>
