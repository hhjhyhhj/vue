//path用来解析路径相关信息的模板
//__dirname 代表的当前文件所在的目录的绝对路径
const path = require("path")
//引入插件Html-webpack-plugin  用来打包HTML文件
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={//配置对象
  //模式：生产模式
  mode:'production',

  //入口
  entry:{
    app:path.resolve(__dirname,'src/index.js')
  },

  //出口，打包成js文件
  output:{
    //filename-文件名  path 指定打包后的绝对路径  [name]代表入口entry的表示名称app
    filename:'static/js/[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },

  //模块加载器
  module:{
    rules:[
      {//1.处理Es6 ==>Es5
        //用于匹配js文件
        test: /\.js$/,
        //排除法
        //exclude: /(node_modules|bower_components)/,
        //include 只针对哪些处理
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            //@babel/preset-env 预设包：包含多个常用插件包的一个大包
            presets: ['@babel/preset-env']
          }
        }
      },
      {//2.处理css的
        test: /\.css$/,
        //有一个顺序问题，从右向左执行
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      {//3.处理图片的
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          //hash.7 ==> 哈希值
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },

  //插件
  plugins:[
    //目的： 自动引入打包html文件 
    new HtmlWebpackPlugin({
      template:'index.html',//将那个页面做为模板页面打包，会在执行命令的目录中查找
      filename:'index.html' //生成的页面(在output指定的path下面)
    })
  ],

  //开发服务器配置-->webpack-dev-server
  devServer:{
    open:true,//自动打开服务器
    // quiet:true,//不做太多日志输出
  },

  //开发中方便看哪一行出错，开启source-map调式
  devtool: 'eval-cheap-module-source-map',
}
