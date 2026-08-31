<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-calendar-heart',
    title: 'Suivre ton cycle',
    text: 'Visualiser ton cycle simplement, à ton rythme.',
  },
  {
    icon: 'i-lucide-heart-pulse',
    title: 'Observer tes ressentis',
    text: 'Noter tes symptômes et ton quotidien en quelques gestes.',
  },
  {
    icon: 'i-lucide-chart-line',
    title: 'Comprendre ton cycle',
    text: 'Consulter des estimations indicatives basées sur ton historique.',
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Garder tes informations avec toi',
    text: 'Retrouver ton suivi depuis ton téléphone, où que tu sois.',
  },
];
</script>

<template>
  <section class="bg-default pb-20 sm:pb-28">
    <UContainer>
      <SharedSectionHeading
        eyebrow="Pourquoi CLEA"
        title="Ton quotidien, à la portée de ta main."
        description="L’essentiel de CLEA, directement dans ton application Android."
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-3xl bg-muted p-6 ring-1 ring-default"
        >
          <span class="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <UIcon
              :name="feature.icon"
              class="size-6"
            />
          </span>
          <h2 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
            {{ feature.title }}
          </h2>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ feature.text }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
