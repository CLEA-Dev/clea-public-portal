<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-clea-950"
    >
      Aller au contenu principal
    </a>

    <LayoutAppHeader />

    <main
      id="main-content"
      class="flex-1"
    >
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>
