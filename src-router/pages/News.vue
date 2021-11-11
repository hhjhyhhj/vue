<template>
<ul>
  <li v-for="(m,index) in messages" :key="m.id">
    <router-link to="???">{{m.title}}</router-link>
  </li>
</ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        message:[]
      }
    },
    mounted(){
      setTimeout(() => {
        
      }, 1000);
    }
  }
</script>
<style scoped>

 
</style>
