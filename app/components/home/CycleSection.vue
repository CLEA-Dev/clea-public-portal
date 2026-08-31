<script setup lang="ts">
const days = Array.from({ length: 30 }, (_, i) => i + 1);
const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function dayClass(day: number): string {
  if (day <= 5) {
    return 'bg-earth-500 font-semibold text-white';
  }
  if (day === 10) {
    return 'bg-accent-100 font-bold text-accent ring-2 ring-accent';
  }
  if (day === 14 || day === 15) {
    return 'bg-primary font-bold text-white';
  }
  if (day >= 8 && day <= 19) {
    return 'bg-primary/15 text-primary';
  }
  return 'text-muted';
}

const legend = [
  { label: 'Règles', icon: 'i-lucide-droplet', dotClass: 'bg-earth-500' },
  { label: 'Fenêtre fertile', icon: 'i-lucide-leaf', dotClass: 'bg-primary/40 ring-1 ring-primary/50' },
  { label: 'Ovulation estimée', icon: 'i-lucide-sun', dotClass: 'bg-primary' },
  { label: 'Aujourd’hui', icon: 'i-lucide-calendar-days', dotClass: 'bg-accent' },
];
</script>

<template>
  <section class="bg-default py-20 sm:py-28">
    <UContainer>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SharedSectionHeading
            eyebrow="Cycle"
            title="Le suivi du cycle, au cœur de CLEA."
            description="Ton corps évolue chaque jour. CLEA t’aide à repérer tes règles, ta fenêtre fertile et ton ovulation, à partir des informations que tu renseignes."
          />

          <ul class="mt-8 grid gap-3 sm:grid-cols-2">
            <li
              v-for="item in legend"
              :key="item.label"
              class="flex items-center gap-2.5"
            >
              <span
                :class="item.dotClass"
                class="size-3 rounded-full"
              />
              <span class="text-sm font-medium text-highlighted">{{ item.label }}</span>
            </li>
          </ul>

          <div class="mt-8 flex items-start gap-3 rounded-2xl bg-muted p-4 ring-1 ring-default">
            <UIcon
              name="i-lucide-shield-check"
              class="mt-0.5 size-5 shrink-0 text-secondary"
            />
            <p class="text-xs leading-relaxed text-muted">
              CLEA ne pose pas de diagnostic médical : les dates et fenêtres proposées sont
              des estimations indicatives basées sur ton historique.
            </p>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md">
          <div
            class="pointer-events-none absolute -right-8 -top-10 size-40 rounded-full bg-secondary/15 blur-2xl"
            aria-hidden="true"
          />

          <div class="relative rounded-[2rem] bg-elevated p-5 shadow-lg ring-1 ring-default sm:p-6">
            <div class="flex items-center justify-between">
              <p class="font-heading text-sm font-bold text-highlighted">
                Exemple de mois
              </p>
              <UBadge
                label="Vue indicative"
                variant="soft"
                color="neutral"
                size="sm"
                class="rounded-full"
              />
            </div>

            <div class="mt-4 grid grid-cols-7 gap-1.5">
              <p
                v-for="(day, index) in weekdays"
                :key="`wd-${index}`"
                class="text-center text-[11px] font-bold text-dimmed"
              >
                {{ day }}
              </p>
            </div>

            <div class="mt-2 grid grid-cols-7 gap-1.5">
              <span
                v-for="day in days"
                :key="day"
                :class="dayClass(day)"
                class="flex size-9 items-center justify-center rounded-full text-sm sm:size-10"
              >
                {{ day }}
              </span>
            </div>

            <div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-default pt-4">
              <p
                v-for="item in legend"
                :key="item.label"
                class="flex items-center gap-1.5 text-[11px] font-medium text-muted"
              >
                <UIcon
                  :name="item.icon"
                  class="size-3.5"
                />
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
