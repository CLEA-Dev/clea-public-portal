<script setup lang="ts">
useSeoMeta({
  title: 'Politique de confidentialité — CLEA',
  description:
    'Comment CLEA collecte, utilise et protège tes données personnelles, notamment celles liées au suivi du cycle.',
});
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="Légal"
      title="Politique de confidentialité."
      description="Tes données personnelles te concernent : voici comment CLEA les traite, avec transparence et prudence. Cette politique sera précisée lors du lancement."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer class="max-w-3xl">
        <div class="prose-heading space-y-8 text-sm leading-relaxed text-default sm:text-base">
          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Données collectées
            </h2>
            <p class="mt-3 text-muted">
              CLEA peut collecter des informations que tu renseignes toi-même, comme ton nom,
              ton numéro de téléphone ou les informations liées à ton cycle. Ces données sont
              fournies volontairement, dans le cadre de l’utilisation de l’application.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Données sensibles
            </h2>
            <p class="mt-3 text-muted">
              Les données liées à la santé et au cycle sont particulièrement protégées. Elles ne
              sont utilisées que pour t’offrir le service demandé et ne sont jamais exposées
              publiquement.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Utilisation
            </h2>
            <p class="mt-3 text-muted">
              Tes informations servent à te fournir le suivi, l’accompagnement et les
              communications que tu demandes. Elles ne sont pas revendues à des tiers.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Partage
            </h2>
            <p class="mt-3 text-muted">
              Les données sont uniquement partagées avec les personnes strictement nécessaires au
              service (notamment une accompagnatrice, si tu le demandes) et dans le respect de la
              confidentialité.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Conservation et droits
            </h2>
            <p class="mt-3 text-muted">
              Tu peux demander l’accès, la correction ou la suppression de tes données à tout
              moment, en contactant l’équipe CLEA. Les détails complets de conservation seront
              publiés avec le lancement de l’application.
            </p>
          </section>
        </div>
      </UContainer>
    </section>
  </main>
</template>
