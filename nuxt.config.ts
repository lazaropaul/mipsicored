import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-module',  // ensures Nuxt builds for CF Workers
    rollupConfig: {
      external: ['cloudflare:email', 'mimetext'], // exclude these from the bundle
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    noreplyPasswd: process.env.NOREPLY_PASSWD,
    supabaseSecretKey: process.env.SUPABASE_SECRET_KEY,
    siteUrl: process.env.SITEURL,
    public: {
      siteUrl: process.env.SITEURL,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
  routeRules: {
        'login': {
            ssr: false
        }
    }
})