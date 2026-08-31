<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
  }>(),
  {
    eyebrow: undefined,
    description: undefined,
    align: 'left',
  },
);
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <span
      v-if="eyebrow"
      class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary"
    >
      {{ eyebrow }}
    </span>

    <h2 class="mt-4 font-heading text-3xl font-extrabold tracking-tight text-highlighted sm:text-4xl">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
