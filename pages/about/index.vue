<template>
    <section class="pricing-main">
        <h1>{{aboutpageContent.description}}</h1> 
    </section>
</template>

<script>
export default { 
  async asyncData({$content}){ 
    const articles = await $content('about').fetch();
    const aboutpageContent = articles[0];    
    return{
      aboutpageContent
    }
  }
}
</script>