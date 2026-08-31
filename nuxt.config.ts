// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'accent',
        'highlight',
        'earth',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
  },

  runtimeConfig: {
    public: {
      app: {
        android: {
          downloadUrl: 'https://drive.google.com/file/d/1YfT5Vwl4s42e9ONYRBKDdBQHO6MO7KdU/view?usp=sharing',
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        indent: 2,
      },
    },
  },
});
