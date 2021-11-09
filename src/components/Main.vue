<template>
     <div>
        <h2 v-if="firstView">请输入关键字进行搜素</h2>
        <h2 v-else-if="loading">正在请求中.....</h2>
        <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
          <div class="row" v-else>
            <div class="card" v-for="(user,index) in users" :key='user.username'>
            <a :href="user_url" target="_blank">
              <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.username}}</p>
          </div>
          </div>
     </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
    data(){
      return {
        firstView:true,//是否显示第一个界面
        loading:false,//是否正在请求加载中
        users:[],//所有匹配的用户列表
        errorMsg:'',//需要显示的错误提示信息
      }
    },
    mounted(){
      //绑定一个事件监听(search)
      this.$eventBus.$on("search",(searchName)=>{
      //更新状态
      this.firstView = false
      this.loading = true

      //发送axios请求获取用户列表数据
        axios.get('https://api.github.com/search/users',{params:{q: searchName}})
              .then(
                response=>{
                    const result =response.data
                    const users = result.items.map((item)=>({
                       username:item.login,
                        url:item.html_url,
                        avatar_url:item.avatar_url
                    }))
                    this.loading = false
                    this.users = users
                },
                error=>{
                    this.loading = false
                    this.errorMsg = error.message
                  }
                )
      })
    },
    beforeDestroy(){
      this.$eventBus.$of('search')
    }
  }
</script>
<style scoped>

 .card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
