<script setup lang="ts">
export interface ExperienceItem {
  organisation: string;
  role: string;
  period: string;
}

defineProps<{
  items: ExperienceItem[];
}>();
</script>

<template>
  <div class="max-w-prose flex flex-col gap-6 text-body-sm font-extralight text-purple-100/50">
    <div v-for="item in items" :key="`${item.organisation}-${item.role}`">
      <p class="text-white text-body-md font-light">{{ item.organisation }}</p>
      <p class="text-purple-300/60">{{ item.role }}</p>
      <p class="mt-2">{{ item.period }}</p>
    </div>
  </div>
</template>
