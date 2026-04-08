<script setup lang="ts">
import type { FontSize, HeadingTag } from '~/types/heading'

interface Props {
  as?: HeadingTag
  size?: FontSize
}

withDefaults(defineProps<Props>(), {
  as: 'h2',
  size: 'display-lg',
})

const sizeClasses: Record<FontSize, string> = {
  'display-8xl': 'text-display-8xl',
  'display-7xl': 'text-display-7xl',
  'display-6xl': 'text-display-6xl',
  'display-5xl': 'text-display-5xl',
  'display-4xl': 'text-display-4xl',
  'display-3xl': 'text-display-3xl',
  'display-2xl': 'text-display-2xl',
  'display-xl': 'text-display-xl',
  'display-lg': 'text-display-lg',
  'display-md': 'text-display-md',
  'display-sm': 'text-display-sm',
  'body-4xl': 'text-body-4xl',
  'body-3xl': 'text-body-3xl',
  'body-2xl': 'text-body-2xl',
  'body-xl': 'text-body-xl',
  'body-lg': 'text-body-lg',
  'body-md': 'text-body-md',
  'body-sm': 'text-body-sm',
  'body-xs': 'text-body-xs',
}

const rootEl = ref<HTMLElement | null>(null)
defineExpose({ $el: rootEl })
</script>

<template>
  <component
    :is="as"
    ref="rootEl"
    :class="['font-display', sizeClasses[size!]]"
  >
    <slot />
  </component>
</template>
