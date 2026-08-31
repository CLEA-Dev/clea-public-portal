<script setup lang="ts">
useSeoMeta({
  title: 'Conditions d\'utilisation — CLEA',
  description:
    'Les conditions d\'utilisation de CLEA : un service de suivi de bien-être, sans diagnostic médical, à découvrir dans des conditions claires.',
});
</script>

<template>
  <main>
    <PageHeader
      eyebrow="Légal"
      title="Conditions d’utilisation."
      description="CLEA est un espace d’information et de bien-être. Ces conditions rappellent les règles simples de son utilisation."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer class="max-w-3xl">
        <div class="space-y-8 text-sm leading-relaxed text-default sm:text-base">
          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Nature du service
            </h2>
            <p class="mt-3 text-muted">
              CLEA propose un suivi du cycle, des estimations indicatives et un accompagnement
              humain. CLEA n’est pas un service médical : il ne fournit ni diagnostic, ni
              prescription, ni traitement.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Estimations indicatives
            </h2>
            <p class="mt-3 text-muted">
              Les dates, fenêtres et prédictions affichées sont fondées sur les informations que
              tu renseignes et doivent être considérées comme des estimations, non comme des
              certitudes. Chaque corps est différent.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Accompagnement
            </h2>
            <p class="mt-3 text-muted">
              L’accompagnement par une accompagnatrice est volontaire, gratuit après une courte
              candidature, et se déroule dans un cadre de respect et de confidentialité. Il ne
              remplace pas non plus un avis médical.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Bon usage
            </h2>
            <p class="mt-3 text-muted">
              Tu t’engages à fournir des informations exactes et à ne pas utiliser CLEA à des fins
              illégales ou nuisibles. Le contenu reste la propriété de CLEA pour son simple usage
              personnel.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Limitation de responsabilité
            </h2>
            <p class="mt-3 text-muted">
              CLEA est fourni tel quel. Les équipes font de leur mieux, mais ne peuvent être tenues
              responsables d’une utilisation des informations à la place d’un professionnel de
              santé.
            </p>
          </section>
        </div>
      </UContainer>
    </section>
  </main>
</template>
