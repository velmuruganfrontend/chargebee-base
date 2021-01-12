<template>
  <div class="container">
    <div>
     <img src="~/static/hero.png" />
    </div>
    <h4>H4</h4>
  </div>
</template>

<script>
export default { 
  layout: 'desktop', 
  /* SEO */
      // Global page headers (https://go.nuxtjs.dev/config-head)
      head: {
        title: 'chargebee - Home page',
        meta: [
          { hid: 'description', name: 'description', content: 'My home page' }
        ]
      },
  /* SEO */
}
</script>

<style lang="scss">
   $clr: red;
   h2{
     color:$clr;
   }
   h3{  
     color: blue;
   }
   h4.hello{
     color: orange;
   }
</style>
