<script setup lang="ts">
interface Props {
  to: string;
  label: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="nav-item group relative text-body-sm w-fit uppercase tracking-widest transition-opacity [&:not(.router-link-active)]:hover:opacity-50"
  >
    {{ label }}
    <span
      class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-purple-400 transition-transform duration-300 ease-in-out group-[.router-link-active]:scale-x-100"
    />
  </NuxtLink>
</template>
