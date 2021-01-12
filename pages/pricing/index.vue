<template>
    <section class="pricing-main">
        <NuxtLink to="/">Go to Home</NuxtLink>
        <img src="~/static/two.jpeg" />  
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12">
              Welcome
            </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
              Welcome
            </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
              Welcome
            </div>
          </div>
           <img src="~/static/three.jpeg" />  
        </div>
       <NuxtLink to="/about">Go to About</NuxtLink>
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

}
</script>

<style>
   
</style>