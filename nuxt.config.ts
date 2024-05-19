// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@/*": `./*`,
  },

  devtools: { enabled: true },
  pages: true,

  app: {
    head: {
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: [
    // SCSS file in the project
    "@/assets/scss/main.scss",
    "@/assets/scss/_colors.scss",
    "@/assets/scss/_fonts.scss",
    "@/assets/scss/_media_when_min_width.scss"
  ],

  modules: ["@nuxt/image"],
  image: {
    providers: {
      customProvider: {
        name: "assetsProvider",
        provider: "~/providers/assets-provider.ts", // must be created
        options: {
          baseURL: "/_nuxt/assets/img",
        },
      },
    },
  },
});
