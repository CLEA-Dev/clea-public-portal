<script setup lang="ts">
const config = useRuntimeConfig();
const downloadUrl = config.public.app?.android?.downloadUrl ?? '';

withDefaults(
  defineProps<{
    label?: string;
    size?: 'md' | 'lg';
    block?: boolean;
  }>(),
  {
    label: 'Télécharger l’application Android',
    size: 'lg',
    block: false,
  },
);
</script>

<template>
  <span>
    <a
      v-if="downloadUrl"
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="[size === 'lg' ? 'px-6 py-3.5 text-base' : '', block ? 'w-full' : '']"
    >
      <UIcon
        name="i-lucide-smartphone"
        class="size-5"
      />
      {{ label }}
    </a>
    <span
      v-else
      class="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-semibold text-muted"
    >
      Bientôt disponible
    </span>
  </span>
</template>
