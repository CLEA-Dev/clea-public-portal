<script setup lang="ts">
useSeoMeta({
  title: 'Connexion — CLEA',
  description:
    'Bientôt disponible : crée ton compte ou connecte-toi pour démarrer le suivi CLEA.',
});

const toast = useToast();
const email = ref('');
const password = ref('');
const mode = ref<'login' | 'register'>('login');

function handleSubmit() {
  toast.add({
    title: 'Bientôt disponible',
    description: 'La création de compte et la connexion seront activées au lancement.',
    color: 'primary',
    icon: 'i-lucide-clock',
  });
}
</script>

<template>
  <main>
    <section class="bg-default py-16 sm:py-24">
      <UContainer class="max-w-md">
        <div class="rounded-[2rem] bg-elevated p-8 ring-1 ring-default">
          <span class="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <UIcon
              name="i-lucide-user-round"
              class="size-7"
            />
          </span>

          <h1 class="mt-5 text-center font-heading text-2xl font-extrabold tracking-tight text-highlighted">
            Bienvenue sur CLEA
          </h1>
          <p class="mt-2 text-center text-sm text-muted">
            Ta connexion sera active dès le lancement de l’application.
          </p>

          <UForm
            class="mt-8 space-y-5"
            @submit="handleSubmit"
          >
            <UFormField
              label="Email"
              name="email"
            >
              <UInput
                v-model="email"
                type="email"
                placeholder="toi@exemple.com"
                autocomplete="email"
                class="w-full"
              />
            </UFormField>

            <UFormField
              v-if="mode === 'register'"
              label="Numéro"
              name="phone"
            >
              <UInput
                type="tel"
                placeholder="ex. : +243 …"
                autocomplete="tel"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Mot de passe"
              name="password"
            >
              <UInput
                v-model="password"
                type="password"
                placeholder="••••••••"
                autocomplete="current-password"
                class="w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              size="lg"
              block
              :label="mode === 'login' ? 'Se connecter' : 'Créer mon compte'"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full"
            />
          </UForm>

          <div class="mt-6 text-center">
            <UButton
              variant="link"
              color="neutral"
              size="sm"
              :label="mode === 'login' ? 'Pas encore de compte ? Créer un compte' : 'Déjà un compte ? Se connecter'"
              class="font-semibold"
              @click="mode = mode === 'login' ? 'register' : 'login'"
            />
          </div>
        </div>

        <p class="mt-6 text-center text-xs leading-relaxed text-muted">
          L’authentification ne sera véritablement activée qu’au lancement. Rien n’est envoyé
          pour le moment.
        </p>
      </UContainer>
    </section>
  </main>
</template>
