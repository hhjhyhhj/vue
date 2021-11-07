## webpack的基本配置选项
(1)mode-模式
(2)entrt-入口
(3)output-出口
(4)module-模块加载器-主要处理css、es6、图片的转换
(5)plugins-插件

package.json中的
devDependencies--开发依赖，项目初期install需要根据devDependencies来下载依赖
devDependencies 表示开发(编译、打包时所需要的依赖)
dependencies  表示编译打包过后运行时所需要的依赖
两者本质上没有什么其他的区别

## 生产模式和开发模式有什么区别？
使用生产环境：
  npm run bulid ==>webpack
  1)、在内存中进行编译打包，生成内存中的打包文件
  2）、保存到本地(在本地生成打包文件)  ===> 此时还不能通过浏览器来访问，需要启动服务器运行
使用开发环境
  npm run dev ==> webpack-dev-server
  1)、在内存中进行编译打包，生成内存中的打包文件
  2）、调用服务器，运行内存中的打包文件  ===> 可以通过浏览器虚拟路径访问


