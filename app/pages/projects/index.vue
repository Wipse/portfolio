<script setup lang="ts">
import ProjectCard from "~/components/ProjectCard.vue";
import projects from "~/data/projects.json";

definePageMeta({ name: "projects" });

usePageMeta({
  title: "Projects — Studio Wisse",
  description: "Een overzicht van mijn projecten — van design systems en component libraries tot creatieve web-experimenten.",
  ogDescription: "Een overzicht van mijn projecten — van design systems tot creatieve web-experimenten.",
});

const containerRef = ref<HTMLElement | null>(null);
const { activeIndex, jumpTo, attach, detach } = useWheelScroll(projects.length);

onMounted(() => attach(containerRef.value));
onUnmounted(() => detach(containerRef.value));
</script>

<template>
  <div ref="containerRef" class="relative w-3/4 h-full ml-auto">
    <!-- Card list -->
    <div class="absolute inset-0 flex flex-col justify-start px-10 pt-10">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.name"
        :slug="project.slug"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
        :is-active="i === activeIndex"
        @activate="jumpTo(i)"
      />
    </div>

    <!-- Scroll indicator || Inactive for now -->
    <!-- <div
      class="pointer-events-none absolute inset-y-0 right-6 flex flex-col items-center justify-center gap-2"
    >
      <button
        v-for="(project, i) in projects"
        :key="project.name"
        class="pointer-events-auto h-1 rounded-full transition-all duration-500"
        :class="
          i === activeIndex ? 'w-4 bg-purple-400' : 'w-1 bg-purple-400/25'
        "
        :aria-label="`Ga naar ${project.name}`"
        @click="jumpTo(i)"
      />
    </div> -->
  </div>
</template>
