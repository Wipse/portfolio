<script setup lang="ts">
import NavItem from "~/components/layout/NavItem.vue";
import NameTitle from "~/components/NameTitle.vue";

const route = useRoute();

/** Hide the persistent name on the homepage — the page itself shows it there. */
const isHome = computed(() => route.name === "home");
</script>

<template>
  <main class="h-screen overflow-hidden bg-[#0d0d0d] p-10 text-purple-100">
    <div
      class="relative z-0 grid h-full grid-cols-3 grid-rows-3 border border-purple-400/50"
    >
      <ShaderBackground />
      <!-- Col 1, Row 1: Nav — never re-renders -->
      <nav
        class="relative col-start-1 row-start-1 flex flex-col justify-start gap-y-4 p-10 font-light"
      >
        <NavItem to="/" label="Home" />
        <NavItem to="/projects" label="Projects" />
        <NavItem to="/toolbox" label="Toolbox" />
        <NavItem to="/info" label="Info" />
        <NavItem to="/contact" label="Contact" />
      </nav>

      <!-- Col 1, Row 3: NameTitle — only visible on inner -->
      <Transition name="name">
        <div
          v-if="!isHome"
          class="relative col-start-1 row-start-3 flex flex-col items-start justify-end p-10"
        >
          <NameTitle />
        </div>
      </Transition>

      <!-- Col 2-3, Row 1-3: page content via slot -->
      <div
        class="relative col-span-2 col-start-2 row-start-1 row-span-3 h-full min-h-0 overflow-hidden"
      >
        <slot />
      </div>
    </div>
  </main>
</template>
