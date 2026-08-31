<script setup lang="ts">
import { publicFeatures } from '~/utils/features';

useSeoMeta({
  title: 'Fonctionnalités — CLEA',
  description:
    'Découvre les fonctionnalités de CLEA : suivi du cycle, ressentis quotidiens, prédictions indicatives, conseils et accompagnement bienveillant.',
});

const detailSections = [
  {
    icon: 'i-lucide-calendar-heart',
    iconClass: 'bg-primary/15 text-primary',
    title: 'Suivi du cycle',
    text: 'Un calendrier clair pour repérer tes règles, ta fenêtre fertile estimée et ton ovulation, jour après jour.',
  },
  {
    icon: 'i-lucide-list-checks',
    iconClass: 'bg-secondary/15 text-secondary',
    title: 'Suivi quotidien',
    text: 'Note ton humeur, ton énergie et tes ressentis en quelques gestes : des repères précieux sur la durée.',
  },
  {
    icon: 'i-lucide-activity',
    iconClass: 'bg-accent/15 text-accent',
    title: 'Symptômes et ressentis',
    text: 'Observe ce que ton corps exprime, d’une période à l’autre, selon tes propres repères.',
  },
  {
    icon: 'i-lucide-trending-up',
    iconClass: 'bg-primary/15 text-primary',
    title: 'Prédictions du cycle',
    text: 'CLEA estime tes prochaines périodes et fenêtres à partir de ton historique. Des indications, pas des certitudes.',
  },
  {
    icon: 'i-lucide-hand-heart',
    iconClass: 'bg-earth/15 text-earth',
    title: 'Accompagnement',
    text: 'Un suivi plus humain avec des accompagnatrices et femmes leaders, quand tu en as besoin.',
  },
  {
    icon: 'i-lucide-book-heart',
    iconClass: 'bg-secondary/15 text-secondary',
    title: 'Conseils et contenus',
    text: 'Des informations simples et bienveillantes pour mieux comprendre ton corps au quotidien.',
  },
];
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="Fonctionnalités"
      title="Des outils simples pour mieux vivre ton cycle."
      description="CLEA regroupe l’essentiel : suivi du cycle, ressentis quotidiens, prédictions indicatives et accompagnement, le tout dans une interface claire et apaisante."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in publicFeatures"
            :key="feature.title"
            class="rounded-3xl bg-muted p-6 ring-1 ring-default"
          >
            <span
              :class="feature.iconClass"
              class="flex size-12 items-center justify-center rounded-2xl"
            >
              <UIcon
                :name="feature.icon"
                class="size-6"
              />
            </span>
            <h2 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
              {{ feature.title }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <div class="mt-16">
          <SharedSectionHeading
            eyebrow="En détail"
            title="Pourquoi c’est fait pour toi."
            align="center"
          />
          <div class="mt-10 grid gap-5 lg:grid-cols-2">
            <div
              v-for="section in detailSections"
              :key="section.title"
              class="flex items-start gap-4 rounded-3xl bg-elevated p-6 ring-1 ring-default"
            >
              <span
                :class="section.iconClass"
                class="flex size-12 shrink-0 items-center justify-center rounded-2xl"
              >
                <UIcon
                  :name="section.icon"
                  class="size-6"
                />
              </span>
              <div>
                <h3 class="font-heading text-base font-bold text-highlighted">
                  {{ section.title }}
                </h3>
                <p class="mt-1.5 text-sm leading-relaxed text-muted">
                  {{ section.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 flex items-start gap-3 rounded-3xl bg-cleaearth-50 p-5 ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800 sm:p-6">
          <UIcon
            name="i-lucide-info"
            class="mt-0.5 size-5 shrink-0 text-earth"
          />
          <p class="text-sm leading-relaxed text-highlighted">
            CLEA est une application de suivi et de bien-être : elle ne pose pas de
            diagnostic et ne remplace pas un avis médical. Les dates, fenêtres et prédictions
            affichées restent des estimations indicatives fondées sur ton historique.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="bg-muted py-16 sm:py-20">
      <UContainer class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="max-w-xl text-center sm:text-left">
          <h2 class="font-heading text-2xl font-bold tracking-tight text-highlighted">
            Envie de tester ?
          </h2>
          <p class="mt-2 text-muted">
            L’application mobile arrive bientôt : inscris-toi pour être prévenue.
          </p>
        </div>
        <UButton
          to="/contact"
          size="lg"
          label="Me prévenir"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-full"
        />
      </UContainer>
    </section>
  </main>
</template>
