<script setup lang="ts">
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Design system', to: '/design-system' },
];
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <header class="sticky top-0 z-50 border-b border-default bg-elevated">
      <UContainer class="flex h-16 items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="font-heading text-lg font-extrabold tracking-tight"
        >
          <span class="bg-linear-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">CLEA</span>
        </NuxtLink>

        <nav class="flex items-center gap-1.5">
          <UButton
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :label="link.label"
            variant="soft"
            color="neutral"
            size="sm"
          />
          <UColorModeButton />
        </nav>
      </UContainer>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-default">
      <UContainer class="flex flex-col items-center justify-between gap-1 py-6 text-sm text-muted sm:flex-row">
        <span>© {{ new Date().getFullYear() }} CLEA</span>
        <span class="text-xs">Socle UI · Nuxt UI v4</span>
      </UContainer>
    </footer>
  </div>
</template>
