<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs/>
  </div>
</template>

<script>
import Blogs from './components/Blogs'
 export default{
  data(){
    return {
      title:'App'
    }
  },
  components:{
    Blogs
  }
}


</script>

<style></style>