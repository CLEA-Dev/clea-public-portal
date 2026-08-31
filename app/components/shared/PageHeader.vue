<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
  }>(),
  {
    eyebrow: undefined,
    description: undefined,
  },
);
</script>

<template>
  <section class="py-14 sm:py-20">
    <UContainer>
      <SharedSectionHeading
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        align="center"
      />
    </UContainer>
  </section>
</template>
