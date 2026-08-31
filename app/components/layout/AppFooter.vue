<script setup lang="ts">
const navigation = [
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Mentorat', to: '/mentorat' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const legal = [
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
  { label: 'Conditions d’utilisation', to: '/conditions-utilisation' },
  { label: 'Mentions légales', to: '/mentions-legales' },
];

const config = useRuntimeConfig();
const downloadUrl = config.public.app?.android?.downloadUrl ?? '';
</script>

<template>
  <footer class="border-t border-default bg-inverted text-inverted">
    <UContainer class="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
      <div>
        <SharedCLEALogo inverted />
        <p class="mt-5 font-heading text-xl font-bold leading-snug">
          Prendre soin de soi, à son rythme.
        </p>
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-inverted/70">
          Une application et un accompagnement pensés pour les femmes, au quotidien.
        </p>
      </div>

      <nav aria-label="Navigation du pied de page">
        <p class="text-xs font-bold uppercase tracking-wider text-inverted/50">
          Navigation
        </p>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in navigation"
            :key="item.to"
          >
            <ULink
              :to="item.to"
              class="text-sm text-inverted/80 transition-colors hover:text-inverted"
            >
              {{ item.label }}
            </ULink>
          </li>
        </ul>
      </nav>

      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-inverted/50">
          Application
        </p>
        <ul class="mt-4 space-y-2.5">
          <li>
            <ULink
              v-if="downloadUrl"
              :to="'/telecharger'"
              class="text-sm text-inverted/80 transition-colors hover:text-inverted"
            >
              Télécharger l’application
            </ULink>
            <p
              v-else
              class="inline-flex items-center gap-2 text-sm text-inverted/60"
            >
              Télécharger l’application
              <UBadge
                label="Bientôt"
                variant="soft"
                color="highlight"
                size="sm"
                class="rounded-full"
              />
            </p>
          </li>
        </ul>
      </div>

      <nav aria-label="Liens légaux">
        <p class="text-xs font-bold uppercase tracking-wider text-inverted/50">
          Légal
        </p>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in legal"
            :key="item.to"
          >
            <ULink
              :to="item.to"
              class="text-sm text-inverted/80 transition-colors hover:text-inverted"
            >
              {{ item.label }}
            </ULink>
          </li>
        </ul>
      </nav>
    </UContainer>

    <div class="border-t border-inverted/10">
      <UContainer class="flex flex-col items-start justify-between gap-2 py-6 text-xs text-inverted/50 sm:flex-row sm:items-center">
        <p>© {{ new Date().getFullYear() }} CLEA — Tous droits réservés.</p>
        <p>Fait avec soin pour accompagner les femmes.</p>
      </UContainer>
    </div>
  </footer>
</template>
