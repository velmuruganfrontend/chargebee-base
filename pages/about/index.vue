<template>
    <section class="pricing-main">
        <h1>{{aboutpageContent.description}}</h1> 
        <NuxtLink to="/">Go to Home</NuxtLink>
        <img src="~/static/hero.png" />
    </section>
</template>

<script>
export default { 
  /* SEO */
      // Global page headers (https://go.nuxtjs.dev/config-head)
      head: {
        title: 'chargebee - About page',
        meta: [
          { hid: 'description', name: 'description', content: 'My About page' }
        ]
      },
  /* SEO */ 
  async asyncData({$content}){ 
    const articles = await $content('about').fetch();
    const aboutpageContent = articles[0];    
    return{
      aboutpageContent
    }
  }
}
</script>