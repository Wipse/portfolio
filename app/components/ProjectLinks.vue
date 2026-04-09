<script setup lang="ts">
defineProps<{
  externalUrl?: string | null;
  disabledMessage?: string | null;
  githubUrl?: string | null;
}>();
</script>

<template>
  <div
    v-if="externalUrl || disabledMessage || githubUrl"
    class="flex items-center gap-5"
  >
    <a
      v-if="externalUrl"
      :href="externalUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="w-fit border border-purple-400/50 px-4 py-2 text-body-xs uppercase tracking-widest text-purple-400 transition-opacity hover:opacity-60"
    >
      Bekijk project →
    </a>
    <span
      v-else-if="disabledMessage"
      class="w-fit cursor-not-allowed select-none border border-purple-400/15 px-4 py-2 text-body-xs uppercase tracking-widest text-purple-100/25"
    >
      {{ disabledMessage }}
    </span>

    <a
      v-if="githubUrl"
      :href="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-body-xs uppercase tracking-widest text-purple-100/70 underline decoration-[0.33px] underline-offset-3 transition-all hover:no-underline"
    >
      GitHub →
    </a>
  </div>
</template>
