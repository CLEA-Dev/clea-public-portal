<script setup lang="ts">
useSeoMeta({
  title: 'Mentorat — CLEA',
  description:
    'Le mentorat CLEA : un accompagnement humain et bienveillant par des accompagnatrices et femmes leaders. Écoute, confiance et suivi personnalisé pour les femmes.',
});

const values = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Écoute sincère',
    text: 'Un espace où l’on prend le temps de t’entendre, sans jugement.',
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Confiance',
    text: 'Des échanges respectueux et confidentiels avant tout.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Solidarité',
    text: 'Des femmes qui avancent ensemble, et pas les unes sans les autres.',
  },
  {
    icon: 'i-lucide-star',
    title: 'Bienveillance',
    text: 'Un accompagnement volontaire, porté par des femmes engagées.',
  },
];

const steps = [
  {
    title: 'Exprime ton besoin',
    text: 'Contacte CLEA (:ton numéro, le formulaire de contact) pour préciser ce que tu recherches.',
  },
  {
    title: 'Rencontre',
    text: 'Un premier échange pour trouver la personne qui correspond à ta situation.',
  },
  {
    title: 'Suivi',
    text: 'Un accompagnement sur la durée, à ton rythme, autour de tes besoins.',
  },
];
</script>

<template>
  <main>
    <PageHeader
      eyebrow="Mentorat"
      title="Un accompagnement humain, entre femmes."
      description="Au-delà du suivi du cycle, CLEA veut mettre en relation des femmes avec des accompagnatrices et femmes leaders, pour un suivi fondé sur l’écoute et la confiance."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="value in values"
            :key="value.title"
            class="rounded-3xl bg-muted p-6 ring-1 ring-default"
          >
            <span class="flex size-12 items-center justify-center rounded-2xl bg-earth/15 text-earth">
              <UIcon
                :name="value.icon"
                class="size-6"
              />
            </span>
            <h2 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
              {{ value.title }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ value.text }}
            </p>
          </div>
        </div>

        <div class="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Comment ça se passe"
              title="Trois étapes simples."
              description="Quelques mots clairs pour démarrer : il n’y a rien de compliqué."
            />

            <ol class="mt-8 space-y-5">
              <li
                v-for="(step, index) in steps"
                :key="step.title"
                class="flex items-start gap-4"
              >
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 font-heading text-sm font-extrabold text-primary">
                  {{ index + 1 }}
                </span>
                <div>
                  <p class="font-semibold text-highlighted">
                    {{ step.title }}
                  </p>
                  <p class="mt-1 text-sm leading-relaxed text-muted">
                    {{ step.text }}
                  </p>
                </div>
              </li>
            </ol>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UButton
                to="/contact"
                size="lg"
                label="Demander un accompagnement"
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

          <div class="relative mx-auto w-full max-w-md">
            <div
              class="pointer-events-none absolute -right-8 -top-10 size-36 rounded-full bg-highlight/30 blur-2xl"
              aria-hidden="true"
            />

            <div class="relative rounded-[2.5rem] bg-cleaearth-50 p-8 ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800 sm:p-10">
              <span class="mx-auto flex size-16 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
                <UIcon
                  name="i-lucide-hand-heart"
                  class="size-8"
                />
              </span>

              <p class="mt-6 font-heading text-xl font-bold tracking-tight text-earth">
                Ce que le mentorat n’est pas.
              </p>

              <ul class="mt-4 space-y-3 text-sm leading-relaxed text-highlighted">
                <li class="flex items-start gap-2.5">
                  <UIcon
                    name="i-lucide-circle-x"
                    class="mt-0.5 size-4 shrink-0 text-earth"
                  />
                  Une consultation médicale — pour la santé, consulte toujours un professionnel.
                </li>
                <li class="flex items-start gap-2.5">
                  <UIcon
                    name="i-lucide-circle-x"
                    class="mt-0.5 size-4 shrink-0 text-earth"
                  />
                  Une obligation : l’accompagnement reste volontaire et engageant pour chacune.
                </li>
                <li class="flex items-start gap-2.5">
                  <UIcon
                    name="i-lucide-circle-x"
                    class="mt-0.5 size-4 shrink-0 text-earth"
                  />
                  Un service automatisé : c’est l’humain qui est au cœur de la démarche.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-muted py-16 sm:py-20">
      <UContainer class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="max-w-xl text-center sm:text-left">
          <h2 class="font-heading text-2xl font-bold tracking-tight text-highlighted">
            On t’accompagne dès que possible.
          </h2>
          <p class="mt-2 text-muted">
            Écris-nous : nous te répondrons au plus vite.
          </p>
        </div>
        <UButton
          to="/contact"
          size="lg"
          label="Contacter CLEA"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-full"
        />
      </UContainer>
    </section>
  </main>
</template>
