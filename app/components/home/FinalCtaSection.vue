<script setup lang="ts">
const toast = useToast();
const phone = ref('');
const submitting = ref(false);

function handleSubmit() {
  if (!phone.value.trim()) {
    return;
  }
  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    toast.add({
      title: 'Merci !',
      description: 'La prise de contact sera bientôt disponible.',
      color: 'primary',
      icon: 'i-lucide-check',
    });
    phone.value = '';
  }, 500);
}
</script>

<template>
  <section class="bg-muted py-20 sm:py-28">
    <UContainer>
      <div class="relative overflow-hidden rounded-[2.5rem] bg-earth p-8 sm:p-14 lg:p-16">
        <div
          class="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div class="absolute -left-16 -top-16 size-56 rounded-full bg-highlight/25 blur-3xl" />
          <div class="absolute -bottom-20 -right-12 size-64 rounded-full bg-primary/30 blur-3xl" />
        </div>

        <div class="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </span>
            <h2 class="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Une question ? Écrivons-nous.
            </h2>
            <p class="mt-4 max-w-md text-base leading-relaxed text-white/70">
              Laisse ton numéro : une membre de l’équipe CLEA te recontactera dès que le
              service sera disponible.
            </p>
          </div>

          <form
            class="flex flex-col gap-3"
            @submit.prevent="handleSubmit"
          >
            <label
              for="contact-phone"
              class="sr-only"
            >Ton numéro de téléphone</label>
            <UInput
              id="contact-phone"
              v-model="phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              placeholder="Ton numéro (ex. : +243 …)"
              size="lg"
              class="rounded-full"
            />
            <UButton
              type="submit"
              size="lg"
              color="primary"
              :label="submitting ? 'Envoi…' : 'Me faire recontacter'"
              trailing-icon="i-lucide-send"
              :loading="submitting"
              class="rounded-full"
            />
            <p class="text-xs text-white/60">
              Aucun envoi pour l’instant : le formulaire sera activé prochainement.
            </p>
          </form>
        </div>
      </div>
    </UContainer>
  </section>
</template>
