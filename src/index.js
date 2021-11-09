import Vue from 'vue'
import App from './App'
import  './base.css'


Vue.config.productionTip = false //不显示不是生产环境的提示
new Vue({
  components:{
    App
  },
  template:"<App/>"

}).$mount("#root")