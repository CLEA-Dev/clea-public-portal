<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Renseigne',
    text: 'Indique les dates clés de ton cycle, en quelques secondes.',
  },
  {
    number: '02',
    title: 'Observe',
    text: 'Note chaque jour tes ressentis, ton humeur et tes symptômes.',
  },
  {
    number: '03',
    title: 'Comprends',
    text: 'CLEA analyse ton historique pour t’aider à y voir plus clair.',
  },
  {
    number: '04',
    title: 'Avance',
    text: 'Anticipe tes prochaines périodes et vis ton quotidien sereinement.',
  },
];
</script>

<template>
  <section class="bg-muted py-20 sm:py-28">
    <UContainer>
      <SharedSectionHeading
        eyebrow="Comment ça marche"
        title="Un accompagnement simple, pas à pas."
        description="Quatre étapes, aucune complication. CLEA s’apprend en quelques minutes."
        align="center"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative rounded-3xl bg-default p-6 ring-1 ring-default"
        >
          <span class="flex size-12 items-center justify-center rounded-full bg-primary/12 font-heading text-lg font-extrabold text-primary">
            {{ step.number }}
          </span>
          <h3 class="mt-5 font-heading text-lg font-bold tracking-tight text-highlighted">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ step.text }}
          </p>

          <UIcon
            v-if="index < steps.length - 1"
            name="i-lucide-arrow-right"
            class="absolute -right-3.5 top-1/2 hidden size-5 -translate-y-1/2 text-muted lg:block"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
