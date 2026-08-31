<script setup lang="ts">
useSeoMeta({
  title: 'Contact — CLEA',
  description:
    'Contacte l’équipe CLEA pour toute question, suggestion ou demande d’accompagnement : formulaire, WhatsApp ou email.',
});

const toast = useToast();
const name = ref('');
const phone = ref('');
const reason = ref('question');
const message = ref('');
const sending = ref(false);

const reasons = [
  { label: 'Une question générale', value: 'question' },
  { label: 'Demander un accompagnement', value: 'accompagnement' },
  { label: 'Devenir accompagnatrice', value: 'accompagnatrice' },
  { label: 'Autre', value: 'autre' },
];

function handleSubmit() {
  sending.value = true;
  window.setTimeout(() => {
    sending.value = false;
    toast.add({
      title: 'Merci pour ton message !',
      description: 'Le formulaire sera réellement activé bientôt — en attendant, préfère WhatsApp.',
      color: 'primary',
      icon: 'i-lucide-check',
    });
    message.value = '';
  }, 500);
}

const whatsappUrl = 'https://wa.me/243973042972';
</script>

<template>
  <main>
    <SharedPageHeader
      eyebrow="Contact"
      title="Parlons-en."
      description="Une question, une suggestion, une demande d’accompagnement ? Écris-nous, nous te répondrons avec plaisir."
    />

    <section class="bg-default pb-20 sm:pb-28">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
          <UCard class="rounded-3xl">
            <h2 class="font-heading text-xl font-bold tracking-tight text-highlighted">
              Le formulaire
            </h2>
            <p class="mt-2 text-sm text-muted">
              Il sera disponible très bientôt : en attendant, tu peux nous écrire sur WhatsApp.
            </p>

            <UForm
              class="mt-6 space-y-5"
              :state="{ reason: 'question' }"
              @submit="handleSubmit"
            >
              <UFormField
                label="Ton nom"
                name="name"
              >
                <UInput
                  v-model="name"
                  placeholder="Ton prénom"
                  autocomplete="name"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Ton numéro"
                name="phone"
              >
                <UInput
                  v-model="phone"
                  type="tel"
                  placeholder="ex. : +243 …"
                  autocomplete="tel"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Le sujet"
                name="reason"
              >
                <USelect
                  v-model="reason"
                  :items="reasons"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Ton message"
                name="message"
              >
                <UTextarea
                  v-model="message"
                  :rows="5"
                  placeholder="Dis-nous tout…"
                  class="w-full"
                />
              </UFormField>

              <UButton
                type="submit"
                size="lg"
                :label="sending ? 'Envoi…' : 'Envoyer le message'"
                trailing-icon="i-lucide-send"
                :loading="sending"
                class="rounded-full"
              />
            </UForm>
          </UCard>

          <div class="space-y-5">
            <div class="rounded-3xl bg-cleaearth-50 p-6 ring-1 ring-cleaearth-200 dark:bg-cleaearth-950/70 dark:ring-cleaearth-800">
              <span class="flex size-11 items-center justify-center rounded-full bg-cleaearth-200 text-earth dark:bg-cleaearth-800">
                <UIcon
                  name="i-lucide-message-circle"
                  class="size-5"
                />
              </span>
              <h2 class="mt-4 font-heading text-lg font-bold tracking-tight text-highlighted">
                WhatsApp
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-muted">
                Le plus rapide : écris-nous directement sur WhatsApp, nous te répondrons avec plaisir.
              </p>
              <UButton
                class="mt-4 rounded-full"
                color="secondary"
                label="Écrire sur WhatsApp"
                leading-icon="i-lucide-message-circle"
                :to="whatsappUrl"
                :external="true"
                target="_blank"
              />
            </div>

            <div class="rounded-3xl bg-muted p-6 ring-1 ring-default">
              <span class="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <UIcon
                  name="i-lucide-mail"
                  class="size-5"
                />
              </span>
              <h2 class="mt-4 font-heading text-lg font-bold tracking-tight text-highlighted">
                Email
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-muted">
                Pour les demandes plus formelles, une adresse email sera communiquée ici dès
                l’ouverture du service.
              </p>
            </div>

            <div class="rounded-3xl bg-cleaearth-950 p-6 text-cleaearth-50">
              <span class="flex size-11 items-center justify-center rounded-full bg-cleaearth-800 text-cleaearth-100">
                <UIcon
                  name="i-lucide-clock"
                  class="size-5"
                />
              </span>
              <h2 class="mt-4 font-heading text-lg font-bold tracking-tight">
                Délai de réponse
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-cleaearth-100/80">
                Nous ferons de notre mieux pour te répondre dès que possible.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
