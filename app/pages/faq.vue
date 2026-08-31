<script setup lang="ts">
useSeoMeta({
  title: 'FAQ — CLEA',
  description:
    'Les réponses aux questions les plus fréquentes sur CLEA : le suivi du cycle, les prédictions, l’accompagnement, la confidentialité et la disponibilité de l’application.',
});

const faqGroups = [
  {
    title: 'Application',
    icon: 'i-lucide-smartphone',
    items: [
      {
        label: 'Quand l’application sera-t-elle disponible ?',
        content:
          'La version Android de CLEA est en cours de préparation. Dès sa mise en ligne, les liens de téléchargement seront ajoutés sur ce site.',
      },
      {
        label: 'CLEA est-elle gratuite ?',
        content:
          'L’application et son suivi du cycle sont conçus pour rester simples et accessibles. Les informations précises sur les tarifs seront publiées avec le lancement.',
      },
      {
        label: 'Dois-je avoir un smartphone pour utiliser CLEA ?',
        content:
          'Une version mobile étant privilégiée, un smartphone est recommandé. Le site web reste accessible pour découvrir CLEA et ses contenus.',
      },
    ],
  },
  {
    title: 'Suivi du cycle',
    icon: 'i-lucide-calendar-heart',
    items: [
      {
        label: 'Comment se passent les prédictions ?',
        content:
          'CLEA s’appuie sur ton historique renseigné pour estimer tes prochaines périodes, ta fenêtre fertile et ton ovulation. Ces prévisions sont indicatives et peuvent varier.',
      },
      {
        label: 'CLEA remplace-t-elle un avis médical ?',
        content:
          'Non. CLEA est un outil de suivi et de bien-être : il ne pose pas de diagnostic et ne remplace jamais la consultation d’un professionnel de santé.',
      },
      {
        label: 'À quoi servent les ressentis ?',
        content:
          'Noter ton humeur ou ton énergie t’aide à repérer les tendances de ton corps sur la durée. C’est un repère personnel, et rien de plus.',
      },
    ],
  },
  {
    title: 'Accompagnement',
    icon: 'i-lucide-hand-heart',
    items: [
      {
        label: 'Comment être accompagnée ?',
        content:
          'Passe par le formulaire de contact en précisant ton besoin. Un premier échange permettra de trouver la forme d’accompagnement la plus adaptée.',
      },
      {
        label: 'L’accompagnement est-il payant ?',
        content:
          'L’accompagnement proposé par une accompagnatrice est gratuit et accessible après une courte candidature. Aucun paiement n’est demandé.',
      },
      {
        label: 'Qui sont les accompagnatrices ?',
        content:
          'Des femmes engagées, volontaires et formées à l’écoute : le mentorat CLEA repose sur l’humain et la confiance.',
      },
    ],
  },
  {
    title: 'Confidentialité',
    icon: 'i-lucide-lock',
    items: [
      {
        label: 'Mes données sont-elles protégées ?',
        content:
          'Oui. Tes informations personnelles et de santé sont traitées avec la plus grande discrétion et ne sont jamais exposées publiquement.',
      },
      {
        label: 'Mes échanges restent-ils privés ?',
        content:
          'Les échanges avec une accompagnatrice sont confidentiels, dans le respect de la loi et des règles d’éthique.',
      },
    ],
  },
];
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="FAQ"
      title="Tes questions, nos réponses."
      description="Si tu ne trouves pas ta réponse ici, contacte-nous : nous te répondrons volontiers."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer class="max-w-3xl">
        <div class="space-y-12">
          <div
            v-for="group in faqGroups"
            :key="group.title"
          >
            <h2 class="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-highlighted">
              <UIcon
                :name="group.icon"
                class="size-5 text-primary"
              />
              {{ group.title }}
            </h2>
            <UAccordion
              :items="group.items"
              class="mt-5"
            />
          </div>
        </div>

        <div class="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-cleaearth-50 p-6 text-center ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800 sm:p-8">
          <span class="flex size-12 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
            <UIcon
              name="i-lucide-message-circle"
              class="size-6"
            />
          </span>
          <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
            Une autre question ?
          </h2>
          <p class="max-w-md text-sm leading-relaxed text-muted">
            Écris-nous via la page contact : nous ferons de notre mieux pour te répondre rapidement.
          </p>
          <UButton
            to="/contact"
            label="Contacter CLEA"
            trailing-icon="i-lucide-arrow-right"
            class="rounded-full"
          />
        </div>
      </UContainer>
    </section>
  </main>
</template>
