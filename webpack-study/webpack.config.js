
const path = require('path')
// 启用热更新 第二步 引用相应的模块
const webpack=require('webpack')

// 导入在内存中生成HTML页面的插件, 并自动把打包好的bundle注入到页面底部
const htmlWebpackPlugin=require('html-webpack-plugin')

// 向外暴露一个配置对象， 当以命令行运行webpack或者webpack-dev-server的时候，工具会发现我们并没有提供要打包的文件入口和出口文件， 
// 此时，它会检查项目根目录中的哦欸之文件并读取这个文件，从而拿到这个配置对象，然后根据这个对象进行打包
module.exports = { 
    // 入口 表示要使用webpack打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'), // 指定打包好的文件，输出到哪个目录
        filename: 'bundle.js'  // 指定输出的文件名称
    },
    // 第一步 设置对应的参数
    devServer: { // 配置dev-server命令参数 
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },

    plugins:[ // 配置插件节点
         // "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"  
        new webpack.HotModuleReplacementPlugin(), // new一个热更新的模块对象， 这是启用热更新的第三步
        new htmlWebpackPlugin({ // 在内存中生成HTML页面的操作
            template:path.join(__dirname, './src/index.html'),
            filename:'index.html'
        })
    ],

    module:{ // 这个节点，用于配置所有第三方模块加载器

        rules:[ // 所有第三方模块匹配规则
             // 配置处理.css文件的第三方loader规则  test需要匹配的文件名规则，use使用的loader模块处理器
            {test:/\.css$/, use:['style-loader','css-loader']},
            // 默认是以base64来构造图片， 如果想直接显示图片可以利用limit,  如果图片的大小大于或等于limit数值，那么图片显示。 否则图片以base64构造显示
            // name参数[hash:8]表示8位hash值, name表示原来的名称  ext表示扩展名
            {test:/\.(jpg|jpeg|png|bmp|gif)$/, use:"url-loader?limit=127&name=[hash:8][name].[ext]"},
            // 处理字体小图标
            {test:/\.(ttf|woff)$/, use:'url-loader'},
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
        ]

    }
}