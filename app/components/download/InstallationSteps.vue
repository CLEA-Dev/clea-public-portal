<script setup lang="ts">
const steps = [
  { title: 'Télécharge l’APK', text: 'Appuie sur le bouton de téléchargement pour récupérer le fichier, hébergé sur Google Drive.' },
  { title: 'Ouvre le fichier téléchargé', text: 'Localise le fichier dans tes téléchargements et ouvre-le.' },
  { title: 'Autorise l’installation', text: 'Si Android t’affiche un avertissement (application provenant d’une source externe), confirme seulement pour cette installation.' },
  { title: 'Installe CLEA', text: 'Lance l’installation. Tu peux ensuite trouver CLEA dans tes applications.' },
  { title: 'Ouvre l’application', text: 'C’est prêt : ton espace CLEA est à portée de main.' },
];
</script>

<template>
  <section class="bg-elevated py-20 sm:py-28">
    <UContainer>
      <SharedSectionHeading
        eyebrow="Installation"
        title="Comment installer CLEA ?"
        description="Quelques étapes simples. Comme l’APK est fourni hors Google Play, Android peut afficher un avertissement : c’est normal, tu n’as rien à désactiver globalement."
        align="center"
      />

      <ol class="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="rounded-3xl bg-default p-6 ring-1 ring-default"
        >
          <span class="flex size-10 items-center justify-center rounded-full bg-primary/12 text-sm font-extrabold text-primary">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h2 class="mt-4 font-heading text-lg font-bold tracking-tight text-highlighted">
            {{ step.title }}
          </h2>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ step.text }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
