<template>
  <div>
    <h2>Blog列表</h2>
    <ul>
      <Blog v-for="(blog,index) in blogs" :key="blog.id" :blog="blog"/>
    </ul>
  </div>
  
</template>

<script>
import Blog from './Blog'
export default{
  components:{//注册局部组件，只能在当前组件使用
    Blog
  },
  data(){
    return {
      blogs:[
        {id:1,title:'blog111'},
        {id:2,title:'blog222'},
        {id:3,title:'blog333'},
      ]
    }
  }
  }



</script>



<style scoped>
/* scoped 限定当前组件的样式只对当前组件有效，对其他组件没有效 */
h2{
  color: red;
}
</style>