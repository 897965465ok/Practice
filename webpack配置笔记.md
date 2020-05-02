# webpack 
## webpack 4.6
## 0配置4.0+

##使用webpack
初始化package.json
```
npm init -y
```
- 全局安装 
```
npm install webpack -g
```
- 本地安装
```
npm install webpack webpack-cli -D

```
##在webpack 里面所有文件都是模块
- js 模块化(AMD CMD es6 commonjs)

#直接允许webpack 
```
npx webpack 

```
#在webpack 里面配置开发服务器
```
npm install webpack-dev-server -D

npx webpack-dev-server 运行配置服务器

```
#命令行太长怎么办自己配简写
```
在本地文件夹下的package.json里面找到这行
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  改成这个
   "scripts": {
    "build":"webpack",//打包上线的时候用build命令
    "start":"webpack-dev-server" //开发的时候用start
  }
  然后运行npm run start 就是启动webpack-dev-server了
  启动的时候是进入当前文件夹的跟目录的
```
# webpack 
 - piugin 
 - loader

# webpack 插件1将html打包到build目录下并且可以自动引入生产的JS文件
```
cnpm install html-webpack-plugin -D   下载插件

 require('html-webpack-plugin') 引入

 plugins: [new HtmlWebpackPlugin({     //HtmlWebpackPlugin是一个类所以要new 出来
        template: './src/index.html', //将打包出的js 放入路径中的模板生成文件放入到output设置好的目录下这里是  path:path.resolve('./dist')
        title: '猪猪爱你哦',  //修改模板标题  !要到index.htm模板里面修改用的EJS语法  <%=htmlWebpackPlugin.options.title %>
        // minify: { // 打包后格式压缩 
        //     removeAttributeQuotes: true, //去掉""
        //     collapseWhitespace:true,//打包成一行
        // },
        hash:true, //在生产出的文件里加上哈希符号主要用于版本号 main.js?c36d011b6ea2917684dd

    }),],//插件配置

 // new HtmlWebpackPlugin({     //【多文件版本有多少个对应的文件就需要多少个配置】
    //         filename:'a.html',//多文件文件名
    //         template: './src/index.html', 
    //         hash:true, 
    //         chunks:['index'] //引入的 entry上面设置好的key
    //     }), 
    //     new HtmlWebpackPlugin({     
    //         filename:'b.html',//多文件文件名
    //         template: './src/index.html', 
    //         hash:true, 
    //         chunks:['a']//引入的 entry上面设置好的key
    //     }), 
  也要修改相应的入口和出口
     // entry['./a.js','b.js'] 当两个文件无关联的时候也可以这样写
    // entry:{ //当多个页面html 的时候需要对应的时候可以这样写,要相应修改出口 和插件
    //  index:'./src/index.js',
    //  a:'./src/a.js'
    // },
   output: {//出口配置
        filename: 'main.[hash:5].js', //出口文件名字    (.[hash:个数]//在生产出的文件里加上哈希符号主要用于识别版本号) 单文件版本
        // filename:'[name].[hash:5].js',//多文件,一个js 对应一个html 需要这样改
        path: path.resolve('./dist'),//必须是绝对路径 出口文件夹
    },
```
# 由于每次打包都会出新的文件 所以我们必须每次打包要清空 这就需要clear插件了
```
cnpm install clean-webpack-plugin -D
 使用方法
 piugins:[ new CleanWebpackPlugin(['./dist'] )] //清楚插件 作用用于删除dist目录下的文件

```
# hot 热更新插件 
```
webpack自带
   devServer: { //开发服务器配置
        contentBase: './dist', //配置服务器启动跳到dist目录默认是根目录  
        port: '3000', //端口号
        compress: true,//服务器压缩
        open: true,//打开的时候自动弹出浏览器
        hot:true,//局部更新,新加的内容
    },
  只有在dvserver里面使用hot 还要用webpack 插件 
  plugins: [new webpack.HotModuleReplacementPlugin()]
  在开发目录下index.js入口文件里写上
 if(module.hot){
 module.hot.accept('./a.js',function () { //只要文件修改就触发他  局部热更新
    let str = require('./a.js')
    console.log(str+2)
 })
}
 if(module.hot){ //嫌麻烦可以这样写全局热更新
 module.hot.accept()
}

```
# 模块机制
```
npm install style-loader node-sass sass-loader css-loader 先下载
    module: { //模块配置
        rules: [           //解析规则重右往左写
            {
                test: /\.css$/, use: [
                    { loader: 'style-loader' }, { loader: 'css-loader' ,options:{} } 
                ]
            },
            {
                test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            }
        ]
    },
   -- style-loader 将css导入html 
   -- css-loader  将css解析成模块
   -- sass-loader 将sass解析成css
   然而都是加载进js这样并不能满足要求
   需要抽离出来 就需要下列插件了 
   npm install extract-text-webpack-plugin@next  -D 
   extract-text-webpack-plugin@next使用方法
    plugins: [ new  ExtractTextWebpackPlugin(
        {
            filename:'css/index.css' //抽离出来的文件路径
        }
    ), //css抽离类] 
      module: { //模块配置
        rules: [           
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({ //使用插件
                    use: [ //因为要抽离出来而不是写入style所以删除了style-loader
                        {
                            loader: 'css-loader', 
                            options: {}
                        }
                    ]
                })
            },
            {
                test: /\.scss$/, use: ExtractTextWebpackPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
        ]
    },
```
# 如果想保存两种格式文件怎么弄 css 和sass
```
let css new  ExtractTextWebpackPlugin({
   filename:'css/css.css',
   disable:true //表示禁用 要相应修改 module加载器配置   fallback:'style-loader' //表示禁用的时候用这个加载器
})
let sass new new  ExtractTextWebpackPlugin({
   filename:'css/scss.css'
    disable:true //表示禁用  要相应修改 module加载器配置   fallback:'style-loader' //表示禁用的时候用这个加载器
})
 plugins: [ css ({  因为上面new 过了所以这里直接用
            filename:'css/index.css' //抽离出来的文件路径

 },sass({
    filename'css/index.scss'
 }))
  module: { //模块配置
        rules: [           
            {
                test: /\.css$/,
                use: css.extract({ //使用插件  要换成相应的插件
                    fallback:'style-loader' //表示禁用的时候用这个加载器
                    use: [ //因为要抽离出来而不是写入style所以删除了style-loader
                        {
                            loader: 'css-loader', 
                            options: {}
                        }
                    ]
                })
            },
            {
                test: /\.scss$/, use: sass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
        ]
    },
```
# 还有一种模块抽离插件  目前有bug
```
  npm install mini-css-extract-plugin -D
  let MinCSSTractPlugin = require('mini-css-extract-plugin')
   plugins[ new  MinCSSTractPlugin({
      filename:'./css/css.css'文件路径
   }) ]
  module: { //模块配置
        rules: [           
            {
                test: /\.css$/,use: [ //因为要抽离出来而不是写入style所以删除了style-loader
                         MinCSSTractPlugin.loader,
                        {
                            loader: 'css-loader', 
                            options: {}
                        }
                    ]
            
            },
            {
                    use: [
                           MinCSSTractPlugin.loader,
                       {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
           
            }
        ]
    },

```
# webpack 剔除css样式插件
```
平常引入各种css库然后又好多样式没用到怎么办 可以用这款插件智能剔除那些没用的样式
 cnpm install purifycss-webpack purify-css glob -D 三款插件相互依赖
 let PurifycssWebpack = require('purifycss-webpack'); //剔除插件  必须用在HtmlWebpackPlugin
 let glob = require('glob');//剔除插件依赖
 plugins: [new PurifycssWebpack({   //注意注意注意 要用这款插件必须在 HtmlWebpackPlugin后面引入
            paths:glob.sync(path.resolve('src/*.html')), //必须是绝对路径
        })]
```
# webpack 自动加前缀插件
```
cnpm install postcss-loader autoprefixer -D
需要新建postcss.config写写入
module.exports={
   plugins:[
      require('autoprefixer')
      ]
}

 module: { //模块配置
        rules: [           //解析规则重右往左写
            {
                test: /\.css$/, use: [
                    MinCSSTractPlugin.loader,
                    { loader: 'css-loader', options: {} },
                    { loader:'postcss-loader'}, { loader:'postcss-loader'}, 然后倒入加载器
                ]
            },
            {
                test: /\.scss$/, use: [
                    MinCSSTractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader:'postcss-loader'}, 然后倒入加载器
                ]
            }
        ]
    },
```
# webpack 拷贝插件 不编译 img 这些
```
 cnpm install copy-webpack-plugin -D
 let Copy = require('copy-webpack-plugin')
   plugin[ new Copy([{
            from:'./mok',//重哪里烤
            to:'pull'  考过去后的名字
   }
   ])
   ]
```
# webpack 编译 ES7
```
cnpm i babel-loader @babel/core @babel/preset-env -D
cnpm i @babel/runtime @babel/plugin-transform-runtime -D
cnpm i @babel/plugin-proposal-class-properties -D
配置   {       
               test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {

                        "presets": ["@babel/preset-env"],
                        "plugins": [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime"
                        ]
                    }

                }
            }

```