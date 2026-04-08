<script setup lang="ts">
import Tag from "./Tag.vue";

interface Props {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  isActive?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isActive: false });
const emit = defineEmits<{ activate: [] }>();

const { titleRef, detailsRef, onClick, onMouseEnter, onMouseLeave } = useProjectCard({
  isActive: toRef(props, "isActive"),
  slug: toRef(props, "slug"),
  emit: (e) => emit(e),
});
</script>

<template>
  <article
    class="border-b border-purple-400/10 py-5 cursor-pointer"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <h2
      ref="titleRef"
      class="font-display font-light uppercase tracking-widest"
    >
      {{ name }}
    </h2>
    <div ref="detailsRef" class="overflow-hidden">
      <p
        class="line-clamp-2 pt-3 text-body-sm font-extralight text-purple-100/60"
      >
        {{ description }}
      </p>
      <div class="mt-4 flex items-center gap-x-4">
        <Tag v-for="tag in tags" :key="tag"> {{ tag }}</Tag>
        <NuxtLink
          :to="`/projects/${slug}`"
          class="pointer-events-auto text-body-sm text-purple-100/80 font-extralight underline decoration-[0.33px] underline-offset-3 hover:text-purple-100"
        >
          Lees meer...
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
