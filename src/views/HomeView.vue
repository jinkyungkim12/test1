<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <h1>This is Home page</h1>
    <span>{{ name }}</span>
    <KossieCoder></KossieCoder>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }

import KossieCoder from '@/components/KossieCoder.vue'

  export default {
    components: {
      KossieCoder,
    },
    data(){
      return {
        name: '코지코더'
      }
    }    
  }

</script>

<style scoped>
  h1{
    color: blue;
  }
</style>
