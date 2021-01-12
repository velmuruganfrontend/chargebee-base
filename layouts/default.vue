<template>
  <div>
    <Header />
      <Nuxt />
    <Footer />
  </div>
</template>


<script>
/* SEO */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
     htmlAttrs: {
      lang: 'en',
      amp: true
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
     script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', 
        defer: true
      }
    ]
  }
}
/* SEO */
</script>