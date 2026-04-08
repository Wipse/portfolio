<script setup lang="ts">
defineProps<{
  /** `code` uses mono font and a slightly dimmer purple — used for tool badges. */
  variant?: "default" | "code";
}>();

const rootEl = ref<HTMLElement | null>(null);
defineExpose({ $el: rootEl });
</script>

<template>
  <span
    ref="rootEl"
    :class="[
      'border px-3 py-1 text-body-xs uppercase tracking-widest',
      variant === 'code'
        ? 'border-purple-400/40 text-purple-300 font-mono'
        : 'border-purple-400/50 text-purple-400',
    ]"
  >
    <slot />
  </span>
</template>
