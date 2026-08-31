<script setup lang="ts">
useSeoMeta({
  title: 'À propos — CLEA',
  description:
    'CLEA est une application et un accompagnement pensés pour les femmes : comprendre son cycle, mieux écouter son corps et avancer au quotidien, à son rythme.',
});

const pillars = [
  {
    icon: 'i-lucide-compass',
    title: 'Comprendre',
    text: 'Des outils clairs pour mieux connaître son corps et son cycle.',
  },
  {
    icon: 'i-lucide-sun',
    title: 'Se sentir bien',
    text: 'Un rythme qui respecte ta vie, sans pression ni jargon.',
  },
  {
    icon: 'i-lucide-hand-heart',
    title: 'Être accompagnée',
    text: 'Des échanges humains, volontaires et bienveillants.',
  },
];

const values = [
  { icon: 'i-lucide-heart', title: 'Bienveillance', text: 'Jamais de jugement, toujours du respect.' },
  { icon: 'i-lucide-shield', title: 'Confidentialité', text: 'Tes données et tes échanges restent protégés.' },
  { icon: 'i-lucide-user-check', title: 'Respect du rythme', text: 'C’est toi qui décides, toujours.' },
  { icon: 'i-lucide-sprout', title: 'Made in DRC', text: 'Une initiative conçue depuis et pour la RDC.' },
];
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="À propos"
      title="CLEA, c’est quoi ?"
      description="CLEA est née d’une conviction simple : chaque femme mérite de mieux comprendre son corps et d’être accompagnée, sans complexité ni préjugés."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="space-y-5 rounded-3xl bg-muted p-6 ring-1 ring-default sm:p-8">
              <p class="text-base leading-relaxed text-default">
                <span class="font-semibold text-highlighted">CLEA</span> accompagne les femmes au
                quotidien, autour du cycle, des ressentis et de l’accompagnement.
              </p>
              <p class="text-base leading-relaxed text-muted">
                Nous croyons à un suivi doux et concret : comprendre ses rythmes, repérer ses
                habitudes, anticiper ses périodes grâce à des estimations indicatives — et pouvoir
                compter sur un accompagnement humain quand on en a besoin.
              </p>
              <p class="text-base leading-relaxed text-muted">
                Ni médical, ni prescriptif : CLEA reste un espace d’information et de bien-être,
                construit en toute transparence, à destination des femmes et de celles qui les entourent.
              </p>
            </div>
          </div>

          <div class="rounded-3xl bg-cleaearth-50 p-6 ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800 sm:p-8">
            <span class="mx-auto flex size-14 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
              <UIcon
                name="i-lucide-sprout"
                class="size-7"
              />
            </span>
            <p class="mt-4 text-center font-heading text-xl font-bold tracking-tight text-earth">
              Une initiative congolaise.
            </p>
            <p class="mt-3 text-center text-sm leading-relaxed text-highlighted">
              Conçue depuis la RDC, CLEA pense l’accompagnement des femmes avec les réalités
              locales : simplicité, confiance et accessibilité.
            </p>
          </div>
        </div>

        <div class="mt-16">
          <SharedSectionHeading
            eyebrow="Nos piliers"
            title="Trois idées qui nous guident."
            align="center"
          />
          <div class="mt-10 grid gap-5 sm:grid-cols-3">
            <div
              v-for="pillar in pillars"
              :key="pillar.title"
              class="rounded-3xl bg-muted p-6 text-center ring-1 ring-default"
            >
              <span class="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <UIcon
                  :name="pillar.icon"
                  class="size-6"
                />
              </span>
              <h2 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
                {{ pillar.title }}
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-muted">
                {{ pillar.text }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <SharedSectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui compte pour nous."
            align="center"
          />
          <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="value in values"
              :key="value.title"
              class="rounded-3xl bg-elevated p-6 ring-1 ring-default"
            >
              <span class="flex size-11 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <UIcon
                  :name="value.icon"
                  class="size-5"
                />
              </span>
              <h2 class="mt-4 font-heading text-base font-bold text-highlighted">
                {{ value.title }}
              </h2>
              <p class="mt-1.5 text-sm leading-relaxed text-muted">
                {{ value.text }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-muted py-16 sm:py-20">
      <UContainer class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="max-w-xl text-center sm:text-left">
          <h2 class="font-heading text-2xl font-bold tracking-tight text-highlighted">
            Envie d’en savoir plus ?
          </h2>
          <p class="mt-2 text-muted">
            Une question, une suggestion ? Écrivons-nous.
          </p>
        </div>
        <UButton
          to="/contact"
          size="lg"
          label="Nous contacter"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-full"
        />
      </UContainer>
    </section>
  </main>
</template>
