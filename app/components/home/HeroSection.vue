<template>
  <section class="relative overflow-hidden bg-default">
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div class="absolute -right-24 top-8 size-72 rounded-full bg-secondary/15 blur-3xl" />
      <div class="absolute -left-32 bottom-0 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div class="absolute left-[38%] top-4 size-40 rounded-full bg-highlight/25 blur-2xl" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-muted to-transparent" />
    </div>

    <UContainer class="relative py-16 sm:py-24 lg:py-28">
      <div class="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div class="max-w-xl">
          <span class="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
            <UIcon
              name="i-lucide-sparkles"
              class="size-3.5"
            />
            Une application pensée pour les femmes
          </span>

          <h1 class="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-highlighted sm:text-5xl lg:text-6xl">
            Comprendre son cycle.
            <br>
            Mieux écouter son corps.
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-muted">
            CLEA t’accompagne au quotidien pour suivre ton cycle, mieux comprendre
            tes ressentis et avancer à ton rythme — avec simplicité et bienveillance.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <UButton
              to="/connexion"
              size="lg"
              label="Commencer avec CLEA"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full"
            />
            <UButton
              to="/fonctionnalites"
              size="lg"
              label="Découvrir CLEA"
              variant="outline"
              color="neutral"
              class="rounded-full"
            />
          </div>

          <ul class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <li class="flex items-center gap-2 text-sm font-medium text-muted">
              <UIcon
                name="i-lucide-calendar-heart"
                class="size-4 text-primary"
              />
              Suivi du cycle
            </li>
            <li class="flex items-center gap-2 text-sm font-medium text-muted">
              <UIcon
                name="i-lucide-activity"
                class="size-4 text-secondary"
              />
              Ressentis au quotidien
            </li>
            <li class="flex items-center gap-2 text-sm font-medium text-muted">
              <UIcon
                name="i-lucide-hand-heart"
                class="size-4 text-earth"
              />
              Accompagnement
            </li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-md">
          <div
            class="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div class="absolute -right-10 -top-12 size-44 rounded-full border-2 border-dashed border-primary/25" />
            <div class="absolute -left-8 bottom-4 size-24 rounded-full bg-accent/20 blur-xl" />
          </div>

          <div class="relative rounded-[2rem] bg-elevated p-6 shadow-xl ring-1 ring-default sm:p-7">
            <div class="flex items-center justify-between gap-3">
              <p class="flex items-center gap-2 text-sm font-bold text-highlighted">
                <UIcon
                  name="i-lucide-calendar-days"
                  class="size-4 text-primary"
                />
                Ton cycle
              </p>
              <UBadge
                label="Jour 12 · 28"
                variant="soft"
                color="primary"
                class="rounded-full"
              />
            </div>

            <div class="mt-5">
              <div class="flex items-center justify-between text-xs">
                <p class="font-medium text-muted">
                  Progression du cycle
                </p>
                <p class="font-bold text-highlighted">
                  43 %
                </p>
              </div>
              <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                <div class="h-full w-[43%] rounded-full bg-linear-to-r from-primary to-secondary" />
              </div>
            </div>

            <div class="mt-6 grid grid-cols-4 gap-2">
              <div class="flex flex-col items-center gap-1.5 rounded-2xl bg-earth/12 px-2 py-3">
                <UIcon
                  name="i-lucide-droplet"
                  class="size-4 text-earth"
                />
                <p class="text-[11px] font-semibold text-highlighted">
                  Règles
                </p>
              </div>
              <div class="flex flex-col items-center gap-1.5 rounded-2xl bg-primary/12 px-2 py-3">
                <UIcon
                  name="i-lucide-sun"
                  class="size-4 text-primary"
                />
                <p class="text-[11px] font-semibold text-highlighted">
                  Ovulation
                </p>
              </div>
              <div class="flex flex-col items-center gap-1.5 rounded-2xl bg-secondary/12 px-2 py-3">
                <UIcon
                  name="i-lucide-leaf"
                  class="size-4 text-secondary"
                />
                <p class="text-[11px] font-semibold text-highlighted">
                  Fertile
                </p>
              </div>
              <div class="flex flex-col items-center gap-1.5 rounded-2xl bg-accent/12 px-2 py-3">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-4 text-accent"
                />
                <p class="text-[11px] font-semibold text-highlighted">
                  Journée
                </p>
              </div>
            </div>

            <div class="mt-6 flex items-start gap-3 rounded-2xl bg-cleaearth-50 p-4 ring-1 ring-cleaearth-200 dark:bg-cleaearth-900/60 dark:ring-cleaearth-700">
              <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
                <UIcon
                  name="i-lucide-info"
                  class="size-4"
                />
              </span>
              <p class="text-xs leading-relaxed text-highlighted">
                Prochaine période estimée autour du jour 26 — prévision indicative.
              </p>
            </div>

            <div class="mt-4 flex items-center justify-center gap-1.5">
              <span class="size-1.5 rounded-full bg-primary/40" />
              <span class="size-1.5 rounded-full bg-primary/40" />
              <span class="size-1.5 rounded-full bg-primary" />
            </div>
          </div>

          <div
            class="absolute -left-4 top-10 hidden animate-float items-center gap-2 rounded-full bg-default px-3.5 py-2 shadow-lg ring-1 ring-default motion-reduce:animate-none sm:flex"
          >
            <span class="flex size-7 items-center justify-center rounded-full bg-earth/12 text-earth">
              <UIcon
                name="i-lucide-droplet"
                class="size-3.5"
              />
            </span>
            <p class="text-xs font-semibold text-highlighted">
              Règles estimées · ~ le 26
            </p>
          </div>

          <div
            class="absolute -right-3 bottom-14 hidden animate-float-delayed items-center gap-2 rounded-full bg-default px-3.5 py-2 shadow-lg ring-1 ring-default motion-reduce:animate-none sm:flex"
          >
            <span class="flex size-7 items-center justify-center rounded-full bg-secondary/12 text-secondary">
              <UIcon
                name="i-lucide-heart-pulse"
                class="size-3.5"
              />
            </span>
            <p class="text-xs font-semibold text-highlighted">
              Ressentis notés aujourd’hui
            </p>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-muted lg:mt-14">
        Aperçu illustratif du produit — les prévisions restent des estimations indicatives.
      </p>
    </UContainer>
  </section>
</template>
