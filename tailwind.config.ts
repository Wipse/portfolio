import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import { createFluidSize } from './app/utils/fluid-size'

export default {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1384px',
      },
    },
    extend: {
      fontFamily: {
        display: ['"Helvetica Neue"', ...defaultTheme.fontFamily.sans],
        sans: ['"Helvetica Neue"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        'display-8xl': [createFluidSize(80, 168), '1'],
        'display-7xl': [createFluidSize(65, 136), '1'],
        'display-6xl': [createFluidSize(56, 108), '1'],
        'display-5xl': [createFluidSize(48, 88), '1'],
        'display-4xl': [createFluidSize(44, 72), '1'],
        'display-3xl': [createFluidSize(40, 56), '1'],
        'display-2xl': [createFluidSize(32, 44), { lineHeight: createFluidSize(32, 48) }],
        'display-xl': [createFluidSize(28, 36), '1'],
        'display-lg': [createFluidSize(24, 32), '1'],
        'display-md': [createFluidSize(20, 24), { lineHeight: createFluidSize(20, 38) }],
        'display-sm': [createFluidSize(18, 20), '1'],

        // Body sizes
        'body-4xl': [createFluidSize(32, 40), { lineHeight: createFluidSize(48, 64) }],
        'body-3xl': [createFluidSize(24, 28), { lineHeight: createFluidSize(36, 44) }],
        'body-2xl': [createFluidSize(20, 24), { lineHeight: createFluidSize(32, 40) }],
        'body-xl': [createFluidSize(20, 20), { lineHeight: createFluidSize(32, 36) }],
        'body-lg': [createFluidSize(16, 18), { lineHeight: createFluidSize(24, 32) }],
        'body-md': [createFluidSize(14, 16), { lineHeight: createFluidSize(20, 24) }],
        'body-sm': [createFluidSize(12, 14), { lineHeight: createFluidSize(16, 20) }],
        'body-xs': [createFluidSize(10, 12), { lineHeight: createFluidSize(14, 16) }],
      },
      spacing: {
        // Section spacing - fluid responsive
        'section-small': createFluidSize(24, 40),
        'section-medium': createFluidSize(40, 80),
        'section-large': createFluidSize(80, 160),
        'section-xlarge': createFluidSize(120, 240),

        // Header heights
        'header-mobile': '4rem',
        'header-desktop': '4.5rem',

        // Grid en layout
        'grid-gutter': createFluidSize(24, 40),
        'container-offset': 'calc(((100vw - min(1384px, 100vw)) / 2) + 1rem)',
        'outer-offset': 'calc(((100vw - min(2560px, 100vw)) / 2) + 1rem)',
        'outer': '160rem',
      },
    },
  },
} satisfies Config
