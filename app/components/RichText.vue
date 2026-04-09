<script setup lang="ts">
import { marked } from "marked";

const props = defineProps<{ content: string }>();

const html = computed(() => marked(props.content));
</script>

<template>
  <div
    class="max-w-prose space-y-4 text-body-sm font-extralight text-purple-100/60 [&_strong]:font-normal [&_strong]:text-purple-100/80 [&_em]:italic [&_a]:underline [&_a]:decoration-[0.33px] [&_a]:underline-offset-3 [&_a:hover]:text-purple-100 [&_h2]:font-display [&_h2]:uppercase [&_h2]:tracking-widest [&_h2]:text-purple-100 [&_h2]:mb-0 [&_h2+*]:mt-1! [&_h3]:uppercase [&_h3]:tracking-widest [&_h3]:text-purple-100 [&_h3]:mb-0 [&_h3+*]:mt-1!"
    v-html="html"
  />
</template>
