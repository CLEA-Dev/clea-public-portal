<script setup lang="ts">
const points = [
  {
    title: 'Suivre son cycle, jour après jour',
    description: 'Un calendrier simple pour retrouver ses repères.',
    icon: 'i-lucide-calendar-heart',
    color: 'text-primary',
  },
  {
    title: 'Observer ses symptômes et ressentis',
    description: 'Noter ce que le corps dit, sans jugement.',
    icon: 'i-lucide-activity',
    color: 'text-secondary',
  },
  {
    title: 'Comprendre ses habitudes',
    description: 'Distinguer les tendances, au fil du temps.',
    icon: 'i-lucide-trending-up',
    color: 'text-accent',
  },
  {
    title: 'Recevoir des informations utiles',
    description: 'Des contenus simples, pensés pour le quotidien.',
    icon: 'i-lucide-book-heart',
    color: 'text-primary',
  },
  {
    title: 'Être accompagnée, si besoin',
    description: 'Un espace humain, à l’écoute.',
    icon: 'i-lucide-hand-heart',
    color: 'text-earth',
  },
];
</script>

<template>
  <section class="bg-default py-20 sm:py-28">
    <UContainer>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SharedSectionHeading
            eyebrow="CLEA"
            title="Un espace pensé pour toi."
            description="Pas de jargon, pas de pression : CLEA t’aide à mieux connaître ton corps et tes rythmes, pour prendre des décisions plus sereines au quotidien."
          />

          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li
              v-for="point in points"
              :key="point.title"
              class="flex items-start gap-3"
            >
              <span
                class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-elevated ring-1 ring-default"
              >
                <UIcon
                  :name="point.icon"
                  :class="point.color"
                  class="size-4"
                />
              </span>
              <p class="text-sm leading-relaxed">
                <span class="font-semibold text-highlighted">{{ point.title }}.</span>
                <span class="block text-muted">{{ point.description }}</span>
              </p>
            </li>
          </ul>
        </div>

        <div
          class="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-cleaearth-50 px-8 py-12 text-center ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800 sm:px-12"
        >
          <div
            class="pointer-events-none absolute -right-6 -top-6"
            aria-hidden="true"
          >
            <span class="block size-16 rounded-full bg-highlight/40" />
          </div>
          <div
            class="pointer-events-none absolute -bottom-8 -left-6"
            aria-hidden="true"
          >
            <span class="block size-24 rounded-full bg-secondary/20 blur-sm" />
          </div>

          <span class="mx-auto flex size-16 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
            <UIcon
              name="i-lucide-sprout"
              class="size-8"
            />
          </span>

          <p class="mt-6 font-heading text-2xl font-extrabold tracking-tight text-earth sm:text-3xl">
            « À ton rythme. »
          </p>
          <p class="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-highlighted">
            CLEA s’adapte à toi, pas l’inverse. Chaque femme est différente, et c’est ce
            que l’application respecte avant tout.
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
