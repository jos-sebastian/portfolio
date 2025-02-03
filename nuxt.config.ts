// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-12",
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: "Jos Sebastian",
    },
  },

  modules: ["@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
