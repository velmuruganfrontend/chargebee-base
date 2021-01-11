<template>
  <div class="container">
    <div>
     {{ homepageContent.description }}
     <img src="~/static/hero.png" />
    </div>
  </div>
</template>

<script>
export default { 
  /* SEO */
      // Global page headers (https://go.nuxtjs.dev/config-head)
      head: {
        title: 'chargebee - Home page',
        meta: [
          { hid: 'description', name: 'description', content: 'My home page' }
        ]
      },
  /* SEO */
  async asyncData({$content}){ 
    const articles = await $content('home').fetch();
    const homepageContent = articles[0];    
    return{
      homepageContent
    }
  }
}
</script>

<style lang="scss">
   $clr: red;
   h2{
     color:$clr;
   }
</style>
