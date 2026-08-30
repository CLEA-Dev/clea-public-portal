<script setup lang="ts">
useSeoMeta({
  title: 'Design system — CLEA',
  description: 'Référentiel visuel du socle UI CLEA : couleurs, typographie, composants Nuxt UI v4.',
});

const palettes = [
  {
    title: 'clea — turquoise (primary)',
    swatches: [
      'bg-clea-50',
      'bg-clea-100',
      'bg-clea-200',
      'bg-clea-300',
      'bg-clea-400',
      'bg-clea-500',
      'bg-clea-600',
      'bg-clea-700',
      'bg-clea-800',
      'bg-clea-900',
      'bg-clea-950',
    ],
  },
  {
    title: 'cleagreen — vert (secondary)',
    swatches: [
      'bg-cleagreen-50',
      'bg-cleagreen-100',
      'bg-cleagreen-200',
      'bg-cleagreen-300',
      'bg-cleagreen-400',
      'bg-cleagreen-500',
      'bg-cleagreen-600',
      'bg-cleagreen-700',
      'bg-cleagreen-800',
      'bg-cleagreen-900',
      'bg-cleagreen-950',
    ],
  },
  {
    title: 'cleaorange — orange (accent)',
    swatches: [
      'bg-cleaorange-50',
      'bg-cleaorange-100',
      'bg-cleaorange-200',
      'bg-cleaorange-300',
      'bg-cleaorange-400',
      'bg-cleaorange-500',
      'bg-cleaorange-600',
      'bg-cleaorange-700',
      'bg-cleaorange-800',
      'bg-cleaorange-900',
      'bg-cleaorange-950',
    ],
  },
  {
    title: 'cleayellow — jaune (highlight)',
    swatches: [
      'bg-cleayellow-50',
      'bg-cleayellow-100',
      'bg-cleayellow-200',
      'bg-cleayellow-300',
      'bg-cleayellow-400',
      'bg-cleayellow-500',
      'bg-cleayellow-600',
      'bg-cleayellow-700',
      'bg-cleayellow-800',
      'bg-cleayellow-900',
      'bg-cleayellow-950',
    ],
  },
  {
    title: 'cleaearth — terre (earth)',
    swatches: [
      'bg-cleaearth-50',
      'bg-cleaearth-100',
      'bg-cleaearth-200',
      'bg-cleaearth-300',
      'bg-cleaearth-400',
      'bg-cleaearth-500',
      'bg-cleaearth-600',
      'bg-cleaearth-700',
      'bg-cleaearth-800',
      'bg-cleaearth-900',
      'bg-cleaearth-950',
    ],
  },
  {
    title: 'cleaneutral — neutre chaud (fond)',
    swatches: [
      'bg-cleaneutral-50',
      'bg-cleaneutral-100',
      'bg-cleaneutral-200',
      'bg-cleaneutral-300',
      'bg-cleaneutral-400',
      'bg-cleaneutral-500',
      'bg-cleaneutral-600',
      'bg-cleaneutral-700',
      'bg-cleaneutral-800',
      'bg-cleaneutral-900',
      'bg-cleaneutral-950',
    ],
  },
];

const aliases = [
  { alias: 'primary', palette: 'clea', sample: 'bg-primary-700', description: 'Action principale, liens, focus' },
  { alias: 'secondary', palette: 'cleagreen', sample: 'bg-secondary-700', description: 'Action secondaire, validation' },
  { alias: 'accent', palette: 'cleaorange', sample: 'bg-accent-700', description: 'Accents et mises en avant' },
  { alias: 'highlight', palette: 'cleayellow', sample: 'bg-highlight-500', description: 'Surlignage — texte sombre en contraste' },
  { alias: 'earth', palette: 'cleaearth', sample: 'bg-earth-500', description: 'Tons terre, supports neutres chauds' },
  { alias: 'neutral', palette: 'cleaneutral', sample: 'bg-neutral-500', description: 'Neutres, textes et bordures' },
  { alias: 'success', palette: 'green', sample: 'bg-green-600', description: 'État de succès (Tailwind)' },
  { alias: 'info', palette: 'sky', sample: 'bg-sky-600', description: 'État informatif (Tailwind)' },
  { alias: 'warning', palette: 'amber', sample: 'bg-amber-600', description: 'État d’avertissement (Tailwind)' },
  { alias: 'error', palette: 'red', sample: 'bg-red-600', description: 'État d’erreur (Tailwind)' },
];

const buttonVariants: Array<'solid' | 'soft' | 'outline' | 'ghost' | 'subtle' | 'link'> = [
  'solid',
  'soft',
  'outline',
  'ghost',
  'subtle',
  'link',
];

const buttonColors: Array<'primary' | 'secondary' | 'accent' | 'highlight' | 'earth' | 'neutral'> = [
  'primary',
  'secondary',
  'accent',
  'highlight',
  'earth',
  'neutral',
];

const badgeVariants: Array<'solid' | 'outline' | 'soft' | 'subtle'> = ['solid', 'outline', 'soft', 'subtle'];

const badgeColors: Array<'primary' | 'secondary' | 'accent' | 'earth' | 'neutral'> = [
  'primary',
  'secondary',
  'accent',
  'earth',
  'neutral',
];

const firstName = ref('');
const lastEmail = ref('');
const message = ref('');
const intention = ref('decouvrir');
const notifications = ref(true);
const newsletter = ref(false);
const theme = ref('mentorat');

const radioOptions = [
  { label: 'Découvrir le mentorat', value: 'decouvrir' },
  { label: 'Devenir mentor·e', value: 'devenir' },
  { label: 'Autre demande', value: 'autre' },
];

const selectOptions = [
  { label: 'Santé', value: 'sante' },
  { label: 'Mentorat', value: 'mentorat' },
  { label: 'Information', value: 'information' },
];

const alertColors: Array<'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'accent' | 'earth'> = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'accent',
  'earth',
];

const breadcrumbItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Design system' },
];

const tabsItems = [
  { label: 'Santé', icon: 'i-lucide-heart-pulse', content: 'Comprendre son corps et son cycle au quotidien.' },
  { label: 'Mentorat', icon: 'i-lucide-users', content: 'Être accompagnée pas à pas par une mentor·e bénévole.' },
  { label: 'Ressources', icon: 'i-lucide-book-open', content: 'Articles, outils et informations vérifiées.' },
];

const faq = [
  { label: 'Qu’est-ce que CLEA ?', content: 'CLEA accompagne les femmes dans leur quotidien, autour de leur santé, de leur cycle, de l’information et du mentorat.' },
  { label: 'Combien coûte le mentorat ?', content: 'L’accompagnement par une mentor·e est gratuit, accessible après une courte candidature.' },
  { label: 'Mes données restent-elles privées ?', content: 'Oui. Les données de santé ne sont jamais exposées publiquement et restent protégées côté backend.' },
];

const page = ref(1);
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <header class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div class="max-w-2xl">
        <UBadge
          label="Socle UI v1"
          color="accent"
          variant="soft"
          leading-icon="i-lucide-palette"
        />
        <h1 class="mt-4 font-heading text-3xl font-extrabold tracking-tight text-highlighted sm:text-4xl">
          Design system CLEA
        </h1>
        <p class="mt-3 text-lg leading-relaxed text-muted">
          Référentiel visuel du socle frontend : palettes de marque, typographie Manrope et composants
          Nuxt UI v4. La plupart des blocs s’adaptent automatiquement au mode sombre.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <UColorModeButton />
        <UButton
          to="/"
          variant="outline"
          color="neutral"
          leading-icon="i-lucide-house"
          label="Retour à l’accueil"
        />
      </div>
    </header>

    <section
      id="couleurs"
      class="mt-16"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Couleurs
      </h2>
      <UAlert
        class="mt-4"
        color="info"
        variant="soft"
        icon="i-lucide-info"
        title="Aliases sémantiques"
        description="Les composants utilisent des aliases (primary, secondary, accent, highlight, earth…) mappés sur les palettes de marque. En mode clair, primary, secondary et accent sont écrasés vers des nuances plus foncées pour garantir le contraste (≥ 4.5:1)."
      />

      <div class="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <ColorScale
          v-for="palette in palettes"
          :key="palette.title"
          :title="palette.title"
          :swatches="palette.swatches"
        />
      </div>

      <div class="mt-10">
        <h3 class="font-heading text-sm font-bold text-highlighted">
          Mapping des aliases
        </h3>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="alias in aliases"
            :key="alias.alias"
            class="flex items-center gap-3 rounded-lg border border-default bg-elevated p-3"
          >
            <span
              :class="alias.sample"
              class="size-8 rounded-md"
            />
            <div class="min-w-0">
              <p class="text-sm font-semibold text-highlighted">
                {{ alias.alias }}
              </p>
              <p class="truncate text-xs text-muted">
                {{ alias.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Typographie"
      icon="i-lucide-type"
      orientation="horizontal"
    />

    <section
      id="typographie"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Typographie
      </h2>
      <p class="mt-2 text-muted">
        Famille principale : <span class="font-semibold text-highlighted">Manrope</span> (auto-chargée par @nuxt/fonts).
      </p>

      <div class="mt-8 space-y-6 rounded-lg border border-default bg-elevated p-6">
        <div>
          <p class="text-xs uppercase tracking-widest text-muted">
            Display
          </p>
          <p class="font-heading text-5xl font-extrabold tracking-tight text-highlighted">
            Cycle et confiance
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-muted">
            Titre
          </p>
          <p class="font-heading text-3xl font-extrabold tracking-tight text-highlighted">
            Accompagnée à chaque étape
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-muted">
            Sous-titre
          </p>
          <p class="font-heading text-xl font-bold text-highlighted">
            Le mentorat qui prend soin
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-muted">
            Corps de texte
          </p>
          <p class="leading-relaxed text-default">
            CLEA accompagne les femmes dans leur quotidien : comprendre son corps, suivre son cycle,
            s’informer en confiance et être accompagnée par une mentor·e bienveillante.
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-muted">
            Meta / code
          </p>
          <p class="font-mono text-sm text-muted">
            $ pnpm dev — Nuxt UI v4 · Tailwind CSS v4
          </p>
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Boutons"
      icon="i-lucide-mouse-pointer-click"
      orientation="horizontal"
    />

    <section
      id="boutons"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Boutons
      </h2>
      <p class="mt-2 text-muted">
        Le jaune `highlight` s’utilise en soft ou outline — jamais en solid avec texte blanc (contraste).
      </p>

      <div class="mt-6 space-y-6">
        <div
          v-for="variant in buttonVariants"
          :key="variant"
          class="flex flex-wrap items-center gap-3"
        >
          <span class="w-16 text-xs font-semibold text-muted">{{ variant }}</span>
          <UButton
            v-for="color in buttonColors"
            :key="color"
            :color="color"
            :variant="variant"
            :label="color"
            size="sm"
          />
        </div>
      </div>

      <div class="mt-8 grid gap-6 lg:grid-cols-2">
        <div class="rounded-lg border border-default bg-elevated p-5">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            Tailles
          </h3>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <UButton
              label="xs"
              size="xs"
            />
            <UButton
              label="sm"
              size="sm"
            />
            <UButton label="md" />
            <UButton
              label="lg"
              size="lg"
            />
            <UButton
              label="xl"
              size="xl"
            />
          </div>
        </div>

        <div class="rounded-lg border border-default bg-elevated p-5">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            États
          </h3>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <UButton
              label="Icône"
              leading-icon="i-lucide-sparkles"
            />
            <UButton
              label="Trailing"
              trailing-icon="i-lucide-arrow-right"
            />
            <UButton
              label="Chargement"
              loading
            />
            <UButton
              label="Désactivé"
              disabled
            />
            <UButton
              label="Lien nu"
              variant="link"
            />
            <UButton
              label="Square"
              square
              icon="i-lucide-plus"
            />
          </div>
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Badges"
      icon="i-lucide-tag"
      orientation="horizontal"
    />

    <section
      id="badges"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Badges
      </h2>
      <div class="mt-6 grid gap-4 lg:grid-cols-2">
        <div
          v-for="variant in badgeVariants"
          :key="variant"
          class="rounded-lg border border-default bg-elevated p-5"
        >
          <h3 class="font-heading text-sm font-bold text-highlighted">
            {{ variant }}
          </h3>
          <div class="mt-4 flex flex-wrap items-center gap-2">
            <UBadge
              v-for="color in badgeColors"
              :key="color"
              :color="color"
              :variant="variant"
              :label="color"
            />
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-2">
            <UBadge
              color="primary"
              variant="outline"
              label="Nouveau"
              leading-icon="i-lucide-sparkles"
            />
            <UBadge
              color="earth"
              variant="soft"
              label="Mentorat"
            />
            <UBadge
              color="neutral"
              variant="subtle"
              label="avec avatar"
              :avatar="{ text: 'CL' }"
              size="lg"
            />
            <UBadge
              color="secondary"
              variant="solid"
              label="6 nuancées"
              square
            />
          </div>
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Formulaires"
      icon="i-lucide-form-input"
      orientation="horizontal"
    />

    <section
      id="formulaires"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Formulaires
      </h2>
      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <div class="rounded-lg border border-default bg-elevated p-5">
          <UForm>
            <UFormField
              name="prenom"
              label="Prénom"
              required
            >
              <UInput
                v-model="firstName"
                placeholder="Camille"
              />
            </UFormField>

            <UFormField
              name="email"
              label="Email"
              class="mt-4"
            >
              <UInput
                v-model="lastEmail"
                type="email"
                placeholder="camille@exemple.fr"
                leading-icon="i-lucide-mail"
              />
            </UFormField>

            <UFormField
              name="theme"
              label="Sujet"
              class="mt-4"
            >
              <USelect
                v-model="theme"
                :items="selectOptions"
              />
            </UFormField>

            <UFormField
              name="message"
              label="Message"
              class="mt-4"
            >
              <UTextarea
                v-model="message"
                :rows="4"
                placeholder="Votre message…"
              />
            </UFormField>

            <div class="mt-5 flex flex-wrap items-center gap-4">
              <UCheckbox
                v-model="newsletter"
                label="Recevoir la newsletter"
              />
              <USwitch
                v-model="notifications"
                label="Notifications"
              />
            </div>

            <UButton
              type="submit"
              class="mt-5"
              label="Envoyer"
              trailing-icon="i-lucide-send"
            />
          </UForm>
        </div>

        <div class="space-y-6">
          <div class="rounded-lg border border-default bg-elevated p-5">
            <h3 class="font-heading text-sm font-bold text-highlighted">
              Sélecteur radio
            </h3>
            <URadioGroup
              v-model="intention"
              legend="Votre intention"
              :items="radioOptions"
              class="mt-3"
              required
            />
          </div>

          <div class="rounded-lg border border-default bg-elevated p-5">
            <h3 class="font-heading text-sm font-bold text-highlighted">
              Erreur de validation
            </h3>
            <UFormField
              name="email"
              label="Email"
              class="mt-3"
              error="Format d’email invalide."
              eager-validation
            >
              <UInput
                type="email"
                placeholder="camille@exemple.fr"
                leading-icon="i-lucide-mail"
              />
            </UFormField>
            <UFormField
              name="consent"
              error="Ce champ est requis."
              class="mt-4"
            >
              <UCheckbox label="J’accepte les conditions d’utilisation" />
            </UFormField>
          </div>
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Feedback"
      icon="i-lucide-message-circle"
      orientation="horizontal"
    />

    <section
      id="feedback"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Feedback
      </h2>
      <div class="mt-6 grid gap-4 lg:grid-cols-2">
        <UAlert
          v-for="color in alertColors"
          :key="color"
          :color="color"
          variant="soft"
          icon="i-lucide-bell"
          :title="`Alerte ${color}`"
          description="Avec une icône, un titre et une description."
        />
      </div>

      <div class="mt-4 grid gap-4 lg:grid-cols-2">
        <UAlert
          color="success"
          variant="outline"
          icon="i-lucide-circle-check"
          title="Mentor·e confirmé·e"
          description="Votre candidature a bien été enregistrée."
          :close="{ size: 'sm' }"
        />
        <UAlert
          color="warning"
          variant="solid"
          icon="i-lucide-triangle-alert"
          title="Action requise"
          description="Complétez votre profil avant de postuler."
          :actions="[
            { label: 'Compléter', color: 'warning', variant: 'outline', size: 'xs' },
            { label: 'Plus tard', color: 'warning', variant: 'ghost', size: 'xs' },
          ]"
        />
      </div>

      <div class="mt-8">
        <h3 class="font-heading text-sm font-bold text-highlighted">
          Tooltip
        </h3>
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <UTooltip text="Astuce : utilisez le mode sombre">
            <UButton
              label="Survolez-moi"
              leading-icon="i-lucide-mouse"
              variant="outline"
            />
          </UTooltip>
          <UButton
            label="Raccourci"
            variant="ghost"
            color="neutral"
            trailing-icon="i-lucide-command"
            aria-label="Annuler avec le raccourci clavier"
          />
        </div>
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="Navigation"
      icon="i-lucide-compass"
      orientation="horizontal"
    />

    <section
      id="navigation"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Navigation
      </h2>

      <div class="mt-6 rounded-lg border border-default bg-elevated p-5">
        <UBreadcrumb :items="breadcrumbItems" />
      </div>

      <div class="mt-4 rounded-lg border border-default bg-elevated p-5">
        <UTabs
          :items="tabsItems"
          class="w-full"
        />
      </div>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-default bg-elevated p-5">
        <UPagination
          v-model="page"
          :total="50"
          :items-per-page="10"
          show-edges
        />
        <p class="text-sm text-muted">
          Page {{ page }} sur 5
        </p>
      </div>

      <div class="mt-4 rounded-lg border border-default bg-elevated p-5">
        <div class="flex items-center justify-between">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            FAQ
          </h3>
          <UBadge
            label="Accordion"
            color="neutral"
            variant="subtle"
            size="sm"
          />
        </div>
        <UAccordion
          :items="faq"
          class="mt-3"
          :unmount-on-hide="false"
        />
      </div>
    </section>

    <USeparator
      class="mt-16"
      label="États"
      icon="i-lucide-activity"
      orientation="horizontal"
    />

    <section
      id="etats"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        États
      </h2>

      <div class="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-lg border border-default bg-elevated p-5">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            Progression
          </h3>
          <div class="mt-4 space-y-4">
            <UProgress
              :value="65"
              status
            />
            <UProgress
              color="secondary"
              :value="40"
            />
            <UProgress color="accent" />
          </div>
        </div>

        <div class="rounded-lg border border-default bg-elevated p-5">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            Squelettes & raccourcis
          </h3>
          <div class="mt-4 flex items-center gap-3">
            <USkeleton class="size-10 rounded-full" />
            <div class="space-y-2">
              <USkeleton class="h-3 w-40" />
              <USkeleton class="h-3 w-24" />
            </div>
          </div>
          <div class="mt-5 flex flex-wrap gap-1.5">
            <UKbd value="⌘" />
            <UKbd value="K" />
            <UKbd value="⏎" />
            <UKbd value="Shift" />
          </div>
        </div>

        <div class="rounded-lg border border-default bg-elevated p-5">
          <h3 class="font-heading text-sm font-bold text-highlighted">
            Avatars
          </h3>
          <div class="mt-4 flex items-center gap-3">
            <UAvatar
              text="CL"
              color="primary"
            />
            <UAvatar
              text="MN"
              color="accent"
            />
            <UAvatar
              text="AF"
              color="secondary"
              size="lg"
            />
            <UAvatar
              src="https://i.pravatar.cc/80"
              alt="Avatar"
              size="lg"
            />
            <UAvatar
              icon="i-lucide-user"
              color="neutral"
              size="lg"
            />
          </div>
        </div>
      </div>

      <UEmpty
        class="mt-4"
        icon="i-lucide-inbox"
        title="Aucune ressource"
        description="Les ressources apparaîtront ici lorsqu’elles seront publiées."
        :actions="[{ label: 'Recharger', trailingIcon: 'i-lucide-rotate-cw', size: 'sm' }]"
      />
    </section>

    <USeparator
      class="mt-16"
      label="Cartes"
      icon="i-lucide-square"
      orientation="horizontal"
    />

    <section
      id="cartes"
      class="mt-10"
    >
      <h2 class="font-heading text-2xl font-bold text-highlighted">
        Cartes
      </h2>
      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <UCard
          title="Mentorat"
          description="Être accompagnée par une mentor·e bienveillante."
          variant="outline"
        >
          <template #footer>
            <UButton
              label="En savoir plus"
              block
              variant="soft"
              color="secondary"
            />
          </template>
        </UCard>

        <UCard
          title="Santé & cycle"
          description="Comprendre son corps avec des informations vérifiées."
        >
          <template #default>
            <p class="text-sm text-muted">
              Des articles clairs et accessibles, rédigés avec soin.
            </p>
          </template>
          <template #footer>
            <UButton
              label="Lire les articles"
              block
              variant="outline"
            />
          </template>
        </UCard>

        <UCard
          title="Rejoindre CLEA"
          description="Une candidature simple pour devenir mentor·e."
          variant="soft"
        >
          <template #footer>
            <UButton
              label="Postuler"
              block
              color="accent"
            />
          </template>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
