<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string;
    inverted?: boolean;
  }>(),
  {
    to: undefined,
    inverted: false,
  },
);

const logoSrc = '/android-chrome-192x192.png';
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group inline-flex items-center gap-2.5"
    :aria-label="'CLEA — accueil'"
  >
    <img
      :src="logoSrc"
      alt=""
      width="36"
      height="36"
      aria-hidden="true"
      class="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:rotate-6"
    >
    <span
      class="font-heading text-xl font-extrabold tracking-tight"
      :class="inverted ? 'text-inverted' : 'text-highlighted'"
    >
      CLEA
    </span>
  </NuxtLink>

  <span
    v-else
    class="inline-flex items-center gap-2.5"
  >
    <img
      :src="logoSrc"
      alt=""
      width="36"
      height="36"
      aria-hidden="true"
      class="h-9 w-auto shrink-0"
    >
    <span
      class="font-heading text-xl font-extrabold tracking-tight"
      :class="inverted ? 'text-inverted' : 'text-highlighted'"
    >
      CLEA
    </span>
  </span>
</template>
