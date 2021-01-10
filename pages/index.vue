<template>
  <div class="container">
    <div>
     
      <nuxt-content :document="homepageContent" />
    </div>
  </div>
</template>

<script>
export default { 
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
