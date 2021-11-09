# 自定义Vue开发环境
## 1. 搭建基本开发环境
    1). 下载依赖包
        yarn add -D webpack webpack-cli
        yarn add -D html-webpack-plugin
        yarn add -D webpack-dev-server
        yarn add -D babel-loader @babel/core @babel/preset-env
        yarn add -D css-loader style-loader
        yarn add -D url-loader@2.3.0 file-loader@4.3.0
    
    2). webpack的基本配置: webpack.config.js
        module.exports = {
          mode: 'production|development'
          entry: {

          },
          output: {

          },
          module: {
            rules: [

            ]
          },
          plugins: [

          ],
          devServer: {

          },
          devtool: ''
        }

    3). 区分使用生产环境与开发环境
        使用生产环境:
            npm run build   ==> webpack
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 保存到本地(在本地生成打包文件)   ===> 此时还不能通过浏览器来访问, 需要启动服务器运行
        使用开发环境
            npm run dev   ==> webpack-dev-server
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 启动服务器, 运行内存中的打包文件   ===> 可以通过浏览器虚拟路径访问



## day 01 搭建vue的开发环境
    1)、配置处理.vue组件文件的loader和piugins
    2)、配置使用vue-style-loader替换styl-loader
    3)、解决无法编译vue模板的错误
        原因：默认引入的vue的不带编译器的版本，无法对template配置指定的
        解决：

     所有组件对象的原型对象都是一个vm
     绑定时间监听和分发事件的组件对象必须是同一个组件对象  

## day 02 全局时间总线
    创建一个全局的用于绑定事件监听和分发事件的对象:Global Event Bus(全局事件总线)
    事件总线对象就是一个vm
    将其挂载到vue的原型对象上，所有的组件对象就都可以看到这个事件总线的对象
    所有组件对象的原型对象都是vm ===> vue原型对象是组件对象的原型链上的对象
    列如： 在App上创建：
            1)Vue.prototype.$globalEventBus = new Vue()
            2）在APP上的方法上绑定事件监听： this.$globalEventBus.$on('方法名',需要接收的参数)
            在任意后代的上去调用 this.$globalEventBus.$emit('方法名',需要传递的参数)

    按照上面的方法就能实现任意后代向父组件传递参数
## vue组件化开发
