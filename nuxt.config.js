export default {
  target: 'static', 
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    '~/assets/scss/main',
    '~/assets/css/bootstrap.min.css'  
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
    '@aceforth/nuxt-optimized-images',
  ],

  // optimizedImages: {
  //   optimizeImages: true,
  //   inlineImageLimit: 1000,
  //   imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
  //   responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
  //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //   optimizeImages: true,
  //   optimizeImagesInDev: false,
  //   defaultImageLoader: 'img-loader',
  //   mozjpeg: {
  //     quality: 80,
  //   },
  //   optipng: {
  //     optimizationLevel: 3,
  //   },
  //   pngquant: false,
  //   gifsicle: {
  //     interlaced: true,
  //     optimizationLevel: 3,
  //   },
  //   svgo: {
  //     // enable/disable svgo plugins here
  //   },
  //   webp: {
  //     preset: 'default',
  //     quality: 75,
  //   },
  // },  

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
    
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
