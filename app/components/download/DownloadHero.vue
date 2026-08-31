<script setup lang="ts">
</script>

<template>
  <section class="relative overflow-hidden bg-default pb-20 pt-14 sm:pb-28 sm:pt-16">
    <div
      class="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-highlight/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-20 bottom-10 size-64 rounded-full bg-primary/15 blur-3xl"
      aria-hidden="true"
    />

    <UContainer class="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div class="max-w-xl">
        <span class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          Application Android
        </span>

        <h1 class="mt-4 font-heading text-4xl font-extrabold tracking-tight text-highlighted sm:text-5xl">
          CLEA dans ta poche.
        </h1>

        <p class="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Retrouve ton espace CLEA directement sur ton téléphone et garde ton suivi à portée de main,
          où que tu sois.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <SharedAndroidDownloadButton label="Télécharger l'application Android" />
          <UButton
            to="/"
            size="lg"
            variant="outline"
            color="neutral"
            label="Découvrir CLEA"
            class="w-full rounded-full sm:w-auto"
          />
        </div>

        <p class="mt-6 text-sm text-muted">
          APK Android · distribué directement par CLEA.
        </p>
      </div>

      <div class="relative mx-auto w-64 sm:w-72 lg:justify-self-end">
        <div
          class="pointer-events-none absolute -left-10 top-12 size-28 rounded-full bg-highlight/30 blur-xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -right-8 -bottom-6 size-36 rounded-full bg-primary/15 blur-2xl"
          aria-hidden="true"
        />

        <div class="relative rounded-[2.6rem] bg-inverted p-2.5 shadow-2xl ring-1 ring-inverted">
          <div class="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-default">
            <div class="flex items-center justify-between px-5 pt-6">
              <SharedCLEALogo />
              <span class="flex size-5 items-center justify-center rounded-full bg-primary/15">
                <span class="size-2 rounded-full bg-primary" />
              </span>
            </div>

            <div class="mt-6 space-y-3 px-5">
              <div class="h-3 w-4/5 rounded-full bg-muted" />
              <div class="h-2.5 w-3/5 rounded-full bg-elevated" />
            </div>

            <div class="mt-6 rounded-3xl bg-secondary/10 px-5 py-4">
              <div class="flex items-center gap-1.5 text-[11px] font-bold text-secondary">
                <UIcon
                  name="i-lucide-heart-pulse"
                  class="size-3.5"
                />
                Ressentis
              </div>
              <div class="mt-3 flex items-end gap-1.5">
                <span
                  v-for="(height, index) in [8, 14, 10, 18, 12, 20, 15]"
                  :key="index"
                  :style="{ height: `${height * 3}px` }"
                  class="w-2.5 rounded-full"
                  :class="index === 5 ? 'bg-primary' : 'bg-primary/40'"
                />
              </div>
            </div>

            <div class="mt-5 flex items-center justify-between px-5">
              <p class="text-[11px] font-bold text-highlighted">
                Calendrier
              </p>
              <div class="flex gap-1">
                <span
                  v-for="i in 7"
                  :key="i"
                  class="size-6 rounded-full bg-elevated"
                  :class="{ 'bg-secondary/60': i === 2 }"
                />
              </div>
            </div>

            <p class="px-5 pt-4 text-center text-[10px] uppercase tracking-wider text-muted">
              Aperçu illustratif
            </p>
          </div>
        </div>

        <div class="absolute -right-6 top-16 hidden items-center gap-2 rounded-full bg-default px-3.5 py-2 shadow-lg ring-1 ring-default sm:flex">
          <span class="flex size-7 items-center justify-center rounded-full bg-primary/12 text-primary">
            <UIcon
              name="i-lucide-smartphone"
              class="size-3.5"
            />
          </span>
          <p class="text-xs font-semibold text-highlighted">
            Ton suivi, partout
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
