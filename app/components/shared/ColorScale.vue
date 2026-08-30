<script setup lang="ts">
defineProps<{
  title: string;
  swatches: string[];
}>();
</script>

<template>
  <div>
    <h3 class="font-heading text-sm font-bold text-highlighted">
      {{ title }}
    </h3>
    <p class="mt-0.5 text-xs text-muted">
      {{ swatches.length }} nuances — 50 à 950
    </p>
    <div class="mt-3 flex flex-wrap gap-2">
      <UTooltip
        v-for="swatch in swatches"
        :key="swatch"
        :text="swatch"
      >
        <div
          :class="swatch"
          class="size-10 rounded-lg ring-1 ring-default"
        />
      </UTooltip>
    </div>
  </div>
</template>
