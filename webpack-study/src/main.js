// 这个main.js是我们js的入口文件

// 1. 导入jquery
// import *** from *** ES^6中导入其它模块的一种方式
//import $ from 'jquery'
// 使用import语法，导入css样式表
import './css/index.css'
// 注意webpack默认只能打包处理JS类型文件，无法处理其它的非JS类型的文件;

// 1.  如果非要处理css文件，需要安装npm i style-loader css-loader -D
// 2.代开webpack.config.js 这个配置文件，在里卖弄新增一个配置节点叫做module,它是一个对像; 在这个module都西昂身上，有个rules属性，这个rules属性是个数组；这个数组存访了所有第三方文件的匹配和处理规则


// 注意webpack处理第三方文件类型的过程:

// 1.返现这个要处理的文件不是js文件， 然后就去配置文件中，查找有没有对应的第三方loader规则

// 2. 如果找到对应的规则，就会调用对应的loader处理这种文件类型

// 3.在调用loader的时候，是从后往前调用的。

// 4. 当最后的一个loader调用完毕， 会把处理的结果，直接交给webpack进行合并，最终输出到bundle.js中去


// $(function(){
//     // 偶数li设置为红色
//     $('li:odd').css('backgroundColor', 'red')
    
//     // 奇数li设置为#D97634
//     $('li:even').css('backgroundColor',function(){
//         return '#D97634';
//     })
// })

import Vue from '../node_modules/vue/dist/vue.js' // vue.js 引入

import ElementUI from 'element-ui'

import 'element-ui/lib/index.js' // element-ui引入

import 'element-ui/lib/theme-chalk/index.css' // element-ui 样式

// 在Vue中装载ElementUI
Vue.use(ElementUI)

new Vue({

    el:'#app'
})
//Es6高级语法， webpack默认之只能处理一部分es6, 一些更高级的es6或者es7语法webpack是处理不了的;这时候，
// 就需要借助于第三方的loader来帮助webpack处理这些高级的语法, 当第三方loader把高级语法转为低级语法后，会把结果交给webpack去打包到bundle.js

// 通过Babel 可以帮助我们将高级的语法转换位低级的语法
// 1. 在webpack中，可以运行两套包，去安装Babel相关的loader功能
// 1.1 第一套包: npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2 第二套: npm i babel-preset-env  babel-preset-stage-0 -D
// 2.打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则:
// 2.1 {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
// 2.2 注意在配置babel的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉：原因有两
// 2.2.1 如果不排除node_modules, 则Babel会把node_modules中所有的第三方JS文件，都打包编译，这样会非常消耗CPU,同时，打包速度非常慢;
//2.2.2 哪怕，最终，Babel把所有node_modules中的js转换完毕了，但是项目也无法正常运行！

// 3.在项目根目录中，新建一个叫做.babelrc的Babel配置文件，这个配置文件，属于JSON格式，所以，在写.babelrc配置的时候必须符合JSON语言规范：不能写注释，字符串必须用双引号
// 3.1在.babelrc写如下的配置:
//{
// "presets":["env","stage-0"],
// "plugins":["transform-runtime"]
// }



class Person{
    static info={name:'zs', age:20}
}
console.log(Person.info)
