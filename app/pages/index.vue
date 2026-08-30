<script setup lang="ts">
useSeoMeta({
  title: 'CLEA',
  description: 'Bienvenue sur CLEA, plateforme d’accompagnement des femmes au quotidien.',
});
</script>

<template>
  <UContainer class="py-24 sm:py-32">
    <div class="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
      <UBadge
        label="Socle UI prêt"
        color="secondary"
        variant="solid"
        size="sm"
      />

      <h1 class="font-heading text-4xl font-extrabold tracking-tight text-highlighted sm:text-5xl">
        Bienvenue sur CLEA
      </h1>

      <p class="text-lg leading-relaxed text-muted">
        Le design system du socle UI frontend est en place : palettes de marque, typographie Manrope et composants Nuxt UI v4.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <UButton
          to="/design-system"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          label="Découvrir le design system"
        />
      </div>
    </div>
  </UContainer>
</template>
