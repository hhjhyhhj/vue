import Vue from 'vue'
import App from './App'

new Vue({

  beforeCreate(){
    //将当前vm对象作为事件总线对象保存到vue的原型对象(让所有组件对象都直接可见)
    Vue.prototype.$eventBus = this
  },
  components:{
    App
  },
  template:"<App/>"

}).$mount("#root")