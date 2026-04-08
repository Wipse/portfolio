<script setup lang="ts">
import projects from "~/data/projects.json";

definePageMeta({
  name: "projects-detail",
});

const route = useRoute("/projects/[slug]");
const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug),
);

/** Redirect to /projects if slug doesn't match any project. */
if (!project.value) {
  navigateTo("/projects");
}

useHead(computed(() => ({
  title: project.value ? `${project.value.name} — Studio Wisse` : "Projects — Studio Wisse",
  meta: [
    { name: "description", content: project.value?.description ?? "" },
    { property: "og:title", content: project.value ? `${project.value.name} — Studio Wisse` : "Studio Wisse" },
    { property: "og:description", content: project.value?.description ?? "" },
  ],
})));
</script>

<template>
  <div v-if="project" class="relative h-full overflow-y-auto px-10 py-10 flex flex-col items-end">
    <div class="w-3/4 ml-auto">
    <div class="flex flex-col gap-6">
      <div class="flex items-start justify-between">
        <Tag v-for="tag in project.tags" :key="tag">{{ tag }}</Tag>
        <NuxtLink
          to="/projects"
          class="text-body-xs uppercase tracking-widest text-purple-100/40 transition-opacity hover:opacity-100"
        >
          ← Terug
        </NuxtLink>
      </div>

      <h2 class="font-display font-light text-display-3xl uppercase">
        {{ project.name }}
      </h2>

      <p
        class="max-w-prose text-body-lg leading-6.5 font-extralight text-purple-100/70"
      >
        {{ project.description }}
      </p>

      <div
        class="max-w-prose space-y-4 text-body-sm font-extralight text-purple-100/60"
      >
        <p v-for="(paragraph, i) in project.richContent.split('\n\n')" :key="i">
          {{ paragraph }}
        </p>
      </div>

      <a
        v-if="project.externalUrl"
        :href="project.externalUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="w-fit border border-purple-400/50 px-4 py-2 text-body-xs uppercase tracking-widest text-purple-400 transition-opacity hover:opacity-60"
      >
        Bekijk project →
      </a>
    </div>
    </div>
  </div>
</template>
