<template>
    <section class="pricing-main">
        <h1>{{aboutpageContent.description}}</h1> 
        <NuxtLink to="/">Go to Home</NuxtLink>
        <img src="~/static/hero.png" />
        <div class="row">
          <div class="col-md-4">
             Welcome
          </div>
            <div class="col-md-4">
             Welcome
          </div>
            <div class="col-md-4">
             Welcome
          </div>
        </div>
    </section>
</template>

<script>
export default { 
   layout: 'mobile', 
  /* SEO */
      // Global page headers (https://go.nuxtjs.dev/config-head)
      head: {
        title: 'chargebee - About page',
        meta: [
          { hid: 'description', name: 'description', content: 'My About page' }
        ]
      },
  /* SEO */ 

}
</script>