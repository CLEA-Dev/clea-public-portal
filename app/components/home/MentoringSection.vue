<template>
  <section class="bg-cleaearth-50 py-20 dark:bg-cleaearth-950/70 sm:py-28">
    <UContainer>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SharedSectionHeading
            eyebrow="Mentorat"
            title="Besoin d’un accompagnement plus personnel ?"
            description="Au-delà de l’application, CLEA peut te mettre en relation avec des accompagnatrices et femmes leaders pour un suivi plus proche, fondé sur l’écoute et la confiance."
          />

          <ul class="mt-8 flex flex-wrap gap-2.5">
            <li
              v-for="label in ['Échanges humains', 'Suivi personnalisé', 'Gratuit après candidature']"
              :key="label"
              class="flex items-center gap-1.5 rounded-full bg-default px-3.5 py-1.5 text-xs font-semibold text-highlighted ring-1 ring-cleaearth-300"
            >
              <UIcon
                name="i-lucide-check"
                class="size-3.5 text-earth"
              />
              {{ label }}
            </li>
          </ul>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <UButton
              to="/mentorat"
              size="lg"
              label="Découvrir le mentorat"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full"
            />
            <UBadge
              label="Gratuit, après candidature"
              variant="soft"
              color="earth"
              class="rounded-full"
            />
          </div>
        </div>

        <div
          class="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-cleaearth-100 p-8 ring-1 ring-cleaearth-300 dark:bg-cleaearth-900/60 dark:ring-cleaearth-800 sm:p-10"
        >
          <span class="mx-auto flex size-16 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
            <UIcon
              name="i-lucide-hand-heart"
              class="size-8"
            />
          </span>

          <p class="mt-6 text-center font-heading text-xl font-bold tracking-tight text-earth">
            Des femmes pour accompagner des femmes.
          </p>
          <p class="mt-3 text-center text-sm leading-relaxed text-highlighted">
            Un accompagnement humain, volontaire et professionnel, pensé pour celles qui
            souhaitent aller plus loin que le suivi de leur cycle.
          </p>

          <div class="mt-6 flex justify-center">
            <UBadge
              label="Gratuit, accessible après une courte candidature"
              variant="outline"
              color="earth"
              class="rounded-full"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
