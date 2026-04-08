<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" class="h-full" />
  </NuxtLayout>
</template>
