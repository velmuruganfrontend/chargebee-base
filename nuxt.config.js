export default {
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    '~/assets/scss/main'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-purgecss',
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: {
      iconSrc: 'static/icon.png'
    },
    manifest: {
      short_name: "Chargebee",
      start_url:'/',
      theme_color: '#333333'
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
