<script setup lang="ts">
import { publicFeatures } from '~/utils/features';

withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    description?: string;
  }>(),
  {
    eyebrow: 'Fonctionnalités',
    title: 'Tout ce qu\'il te faut, sans complexité.',
    description:
      'L’essentiel pour mieux vivre ton cycle : des outils simples, clairs et respectueux de ton rythme.',
  },
);
</script>

<template>
  <section class="bg-muted py-20 sm:py-28">
    <UContainer>
      <SharedSectionHeading
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        align="center"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in publicFeatures"
          :key="feature.title"
          class="group rounded-3xl bg-default p-6 ring-1 ring-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40"
        >
          <span
            :class="feature.iconClass"
            class="flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
          >
            <UIcon
              :name="feature.icon"
              class="size-6"
            />
          </span>
          <h3 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
