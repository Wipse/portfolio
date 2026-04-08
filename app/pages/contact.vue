<script setup lang="ts">
definePageMeta({
  name: "contact",
});

usePageMeta({
  title: "Contact — Studio Wisse",
  description: "Neem contact op met Studio Wisse voor projecten, samenwerkingen of een goed gesprek.",
});

const links = [
  {
    label: "Email",
    value: "wisse.heida@hotmail.com",
    href: "mailto:wisse.heida@hotmail.com",
  },
  {
    label: "Tel",
    value: "06 11096492",
    href: "tel:+31611096492",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/wisseheida",
    href: "https://www.linkedin.com/in/wisse-heida-786882258/",
  },
  {
    label: "GitHub",
    value: "github.com/wipse",
    href: "https://github.com/wipse",
  },
];
</script>

<template>
  <div class="relative h-full flex flex-col items-start px-10 py-10">
    <div class="w-3/4 ml-auto flex flex-col gap-10 items-end text-end">
      <div class="flex flex-col gap-3">
        <p
          class="max-w-prose text-body-lg font-extralight leading-relaxed text-purple-100/70"
        >
          Ik sta altijd open voor een nieuw project, een samenwerking of gewoon
          om te sparren voor een leuk idee.
        </p>
        <p
          class="max-w-prose text-body-lg font-extralight leading-relaxed text-purple-100/70"
        >
          Bereik me op één van de onderstaande kanalen.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link flex flex-col items-end"
        >
          <span class="text-body-xs uppercase font-light tracking-widest">
            {{ link.label }}
          </span>
          <span class="contact-link__value text-body-sm font-extralight tracking-widest text-purple-100/60 underline decoration-[0.33px] underline-offset-3">
            {{ link.value }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
