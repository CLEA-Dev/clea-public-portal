<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — CLEA',
  description:
    'Mentions légales du site et de l’application CLEA : éditeur, contact et informations à publier lors du lancement.',
});
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="Légal"
      title="Mentions légales."
      description="Les informations légales relatives au site et à l’application CLEA seront complétées lors du lancement officiel."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer class="max-w-3xl">
        <div class="space-y-8 text-sm leading-relaxed text-default sm:text-base">
          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Éditeur
            </h2>
            <p class="mt-3 text-muted">
              Le site CLEA est édité par l’équipe à l’origine de CLEA, une initiative conçue en
              République Démocratique du Congo. Les coordonnées précises de l’éditeur seront
              publiées ici lors du lancement officiel.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Site web
            </h2>
            <p class="mt-3 text-muted">
              Le présent site présente l’application CLEA, ses fonctionnalités et son
              accompagnement. Il reste volontairement une vitrine d’information.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Contact
            </h2>
            <p class="mt-3 text-muted">
              Pour toute question, suggestion ou demande concernant ce site, utilise la page
              contact : une membre de l’équipe te répondra dès que possible.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Propriété intellectuelle
            </h2>
            <p class="mt-3 text-muted">
              L’ensemble des éléments présents sur ce site (textes, visuels, logo) reste la
              propriété de CLEA, sauf mention contraire. Toute reproduction sans autorisation est
              interdite.
            </p>
          </section>

          <section>
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Hébergement
            </h2>
            <p class="mt-3 text-muted">
              Les informations sur l’hébergeur du site seront renseignées lors de la mise en
              ligne définitive.
            </p>
          </section>
        </div>
      </UContainer>
    </section>
  </main>
</template>
