import Vue from 'vue'
import App from './App'
import store from './vuex/store.js'

new Vue({
  components:{
    App
  },
  template:"<App/>",
  store, //所有的组件对象都能一个指定store属性：$store
}).$mount("#root")