<script setup lang="ts">
const items = [
  {
    label: 'Est-ce vraiment l’application CLEA ?',
    content:
      'Oui. Cette version Android est distribuée directement par CLEA et hébergée pour l’instant sur Google Drive. Le lien de téléchargement est fourni sur cette page.',
  },
  {
    label: 'Pourquoi l’APK n’est-il pas sur Google Play ?',
    content:
      'CLEA est actuellement proposée sous forme d’APK hors Google Play. Une page officielle sur Google Play pourra être ajoutée à l’avenir, mais elle n’existe pas encore.',
  },
  {
    label: 'Est-ce que je peux faire confiance au fichier ?',
    content:
      'Il est publié directement par CLEA. Comme toute installation d’une application hors d’une boutique officielle, Android peut afficher un avertissement : c’est un comportement normal, rien à désactiver globalement.',
  },
  {
    label: 'Est-ce payant ?',
    content:
      'Le téléchargement est gratuit. Les informations précises sur d’éventuels tarifs seront publiées lors du lancement officiel de l’application.',
  },
];
</script>

<template>
  <section class="bg-elevated py-20 sm:py-28">
    <UContainer class="max-w-3xl">
      <SharedSectionHeading
        eyebrow="FAQ"
        title="Tes questions sur le téléchargement."
        align="center"
      />
      <UAccordion
        :items="items"
        class="mt-10 rounded-3xl bg-default p-2 ring-1 ring-default"
      />
    </UContainer>
  </section>
</template>
