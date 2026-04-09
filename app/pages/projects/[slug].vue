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

const markdownFiles = import.meta.glob("../../content/projects/*.md", {
  query: "?raw",
  import: "default",
});

const { data: richContent } = await useAsyncData(
  `project-content-${route.params.slug}`,
  async () => {
    const loader = markdownFiles[`../../content/projects/${route.params.slug}.md`];
    return loader ? ((await loader()) as string) : "";
  },
);

useHead(
  computed(() => ({
    title: project.value
      ? `${project.value.name} — Studio Wisse`
      : "Projects — Studio Wisse",
    meta: [
      { name: "description", content: project.value?.description ?? "" },
      {
        property: "og:title",
        content: project.value
          ? `${project.value.name} — Studio Wisse`
          : "Studio Wisse",
      },
      { property: "og:description", content: project.value?.description ?? "" },
    ],
  })),
);
</script>

<template>
  <div
    v-if="project"
    class="relative h-full overflow-y-auto px-10 py-10 flex flex-col items-end"
  >
    <div class="w-3/4 ml-auto">
      <div class="flex flex-col gap-6">
        <div class="flex items-start justify-between">
          <div class="flex flex-wrap gap-2">
            <Tag v-for="tag in project.tags" :key="tag">{{ tag }}</Tag>
          </div>
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

        <RichText v-if="richContent" :content="richContent" />

        <video
          v-if="project.videoUrl"
          :src="project.videoUrl"
          class="w-full max-w-prose rounded-sm"
          controls
          loop
          muted
          playsinline
        />

        <ProjectLinks
          :external-url="project.externalUrl"
          :disabled-message="project.disabledMessage"
          :github-url="project.githubUrl"
        />
      </div>
    </div>
  </div>
</template>
