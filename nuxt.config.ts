import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'nl' },
      meta: [
        { name: 'description', content: 'Studio Wisse — Frontend Developer & Designer gevestigd in Heerenveen. Ik werk op het snijvlak van design en development.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Studio Wisse' },
        { property: 'og:locale', content: 'nl_NL' },
        { name: 'twitter:card', content: 'summary' },
      ],
    },
  },
  modules: [
    '@nuxt/icon',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})