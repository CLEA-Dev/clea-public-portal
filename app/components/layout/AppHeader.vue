<script setup lang="ts">
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Mentorat', to: '/mentorat' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Télécharger', to: '/telecharger' },
];

const secondaryLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const mobileOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur-xl">
    <UContainer class="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
      <SharedCLEALogo to="/" />

      <nav
        class="hidden items-center gap-1 lg:flex"
        aria-label="Navigation principale"
      >
        <ULink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          active-class="text-primary font-semibold"
          inactive-class="text-muted hover:text-highlighted"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
        >
          {{ link.label }}
        </ULink>
      </nav>

      <div class="hidden items-center gap-2.5 lg:flex">
        <UColorModeButton />
        <UButton
          to="/connexion"
          label="Commencer"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-full"
        />
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <UColorModeButton />
        <UButton
          icon="i-lucide-menu"
          variant="soft"
          color="neutral"
          aria-label="Ouvrir le menu"
          class="rounded-full"
          @click="mobileOpen = true"
        />
      </div>
    </UContainer>

    <USlideover
      v-model:open="mobileOpen"
      side="right"
      :close="false"
    >
      <template #header>
        <div class="flex w-full items-center justify-between gap-4">
          <SharedCLEALogo />
          <UButton
            icon="i-lucide-x"
            variant="ghost"
            color="neutral"
            aria-label="Fermer le menu"
            class="rounded-full"
            @click="mobileOpen = false"
          />
        </div>
      </template>

      <template #body>
        <nav
          class="flex flex-col gap-1"
          aria-label="Navigation mobile"
        >
          <ULink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-base font-semibold text-highlighted transition-colors hover:bg-muted"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </ULink>
          <ULink
            v-for="link in secondaryLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-muted"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </ULink>
        </nav>
      </template>

      <template #footer>
        <div class="flex flex-col gap-3">
          <UButton
            to="/connexion"
            label="Commencer"
            trailing-icon="i-lucide-arrow-right"
            class="rounded-full"
            block
            @click="mobileOpen = false"
          />
          <UButton
            to="/connexion"
            label="Se connecter"
            variant="outline"
            color="neutral"
            class="rounded-full"
            block
            @click="mobileOpen = false"
          />
        </div>
      </template>
    </USlideover>
  </header>
</template>
