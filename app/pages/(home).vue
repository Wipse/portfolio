<script setup lang="ts">
definePageMeta({ name: "home" });

usePageMeta({
  title: "Studio Wisse",
  description: "Frontend Developer & Designer gevestigd in Heerenveen. Afgestudeerde CMD'er met expertise in Vue.js, Nuxt, TailwindCSS en GSAP.",
  ogDescription: "Frontend Developer & Designer gevestigd in Heerenveen.",
});
</script>

<template>
  <div class="relative h-full">
    <!-- Top-right: beschrijving -->
    <div class="absolute right-0 top-0 p-10">
      <p
        class="w-48 text-end text-purple-100/80 text-body-sm font-extralight tracking-widest"
      >
        Afgestuurde CMD'er gevestigd in Heerenveen. Met mijn achtergrond in CMD
        te NHL Stenden Leeuwarden ben ik uitgegroeid tot een developer met veel
        designerkennis.
      </p>
    </div>

    <!-- Bottom-right: naam + subtitel -->
    <Transition name="home-name" appear>
      <div class="absolute bottom-0 right-0 flex flex-col items-end p-10">
        <NameTitle class="text-end" />
      </div>
    </Transition>
  </div>
</template>
