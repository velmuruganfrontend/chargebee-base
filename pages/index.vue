<template>
  <div class="container" :class="{'dark': darkMode}">
    <button @click="darkMode = !darkMode">
          Greet
    </button>
    <div>
     <img src="~/static/tech.png" />
    </div>
    <h4>{{ title }}</h4>
    <div class="container-fluid">
       <div class="row">
           <div class="col-sm hidden-xs">Hello</div>
       </div>
    </div>
  </div>
</template>

<script>
export default { 
     data() {
      return {
        title: "I'm coming from lifecycle methods",
        darkMode : false
      }
    },
     methods: {
       doSomething(){
          console.log(this)
       }
     },
      head: {
        title: 'chargebee - Home page',
        meta: [
          { hid: 'description', name: 'description', content: 'My home page' }
        ]
      },

}
</script>

<style lang="scss">
.dark{
  background-color: orchid;
}
</style>
