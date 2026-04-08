<script setup lang="ts">
definePageMeta({ name: "toolbox" });
usePageMeta({
  title: "Toolbox — Studio Wisse",
  description: "De tools en technologieën die ik gebruik — van Vue.js en Nuxt tot Figma en GSAP.",
});

const { categories, setTitleRef, setDetailRef, setToolRef, toggle, onMouseEnter, onMouseLeave } = useToolbox();
</script>

<template>
  <div class="relative h-full overflow-hidden px-10 py-10 flex flex-col gap-10">
    <p class="ml-auto w-3/4 text-end text-body-lg font-extralight leading-relaxed text-purple-100/70">
      Dankzij mijn opleiding CMD en mijn leergierigheid heb ik een brede toolbox.
    </p>

    <!-- Accordion -->
    <div class="ml-auto w-3/4 flex flex-col">
      <template v-for="(cat, i) in categories" :key="cat.label">
        <article
          class="py-5 cursor-pointer"
          @click="toggle(i)"
          @mouseenter="onMouseEnter(i)"
          @mouseleave="onMouseLeave(i)"
        >
          <h2
            :ref="(el) => setTitleRef(el, i)"
            class="font-display font-light uppercase tracking-widest text-end"
          >
            {{ cat.label }}
          </h2>

          <div :ref="(el) => setDetailRef(el, i)" class="overflow-hidden">
            <div class="flex flex-wrap justify-end gap-2 pt-4 pb-1">
              <Tag
                v-for="(tool, j) in cat.tools"
                :key="tool"
                :ref="(el: unknown) => setToolRef(el, i, j)"
                variant="code"
              >
                {{ tool }}
              </Tag>
            </div>
          </div>
        </article>
        <div v-if="i < categories.length - 1" class="w-16 ml-auto border-t border-purple-400/10" />
      </template>
    </div>
  </div>
</template>
