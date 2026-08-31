<script setup lang="ts">
</script>

<template>
  <section class="bg-default py-20 sm:py-28">
    <UContainer>
      <div class="relative overflow-hidden rounded-[2rem] bg-inverted px-6 py-14 text-center text-inverted sm:px-12 sm:py-16">
        <div
          class="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-highlight/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-16 -right-16 size-48 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />

        <span class="relative inline-flex items-center gap-1.5 rounded-full bg-inverted/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-inverted/80">
          Application Android
        </span>

        <h2 class="relative mx-auto mt-4 max-w-2xl font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Prête à emporter CLEA avec toi ?
        </h2>

        <p class="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-inverted/80">
          Télécharge l’APK et retrouve ton suivi directement sur ton téléphone. Cette version Android
          est distribuée directement par CLEA.
        </p>

        <div class="relative mt-8 flex justify-center">
          <SharedAndroidDownloadButton
            label="Télécharger l’APK Android"
            block
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
