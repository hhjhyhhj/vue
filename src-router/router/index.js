// 路由器模板 ===》 对象

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages//Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//声明使用vue插件
Vue.use(VueRouter)
export default new VueRouter({
  //应用中所有的路由
  routers:[
    {
    path:'/about',
    component:About
  },
    {
    path:'/home',
    component:Home,
    //注册子路由
    children:[
      {
        path:'/home/news',
        component:News
      },
      {
        path:'message', //相当于：/home/message
        component:Message
      }
    ]
  },
  //注册自动重定向的路由==>也就是说页面初始化进入显示的是什么路由
  {
    path:'/',
    redirect:'/about'
  },
]
})