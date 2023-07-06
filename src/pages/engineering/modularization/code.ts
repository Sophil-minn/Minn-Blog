export const code1 = `
//模块引用   
require("module");
require("../file.js");
//模块定义
　　exports.doStuff = function() {};
//模块导出
　　module.exports = someValue;
`;

export const code2 = `
{
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/bingqian/projects/nodetest/index.js',
  loaded: false,
  children: 
   [ Module {
       id: '/Users/bingqian/projects/nodetest/b.js',
       exports: {},
       parent: [Circular],
       filename: '/Users/bingqian/projects/nodetest/b.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths: 
   [ '/Users/bingqian/projects/nodetest/node_modules',
     '/Users/bingqian/projects/node_modules',
     '/Users/bingqian/node_modules',
     '/Users/node_modules',
     '/node_modules' ] 
}
`;

export const code3 = `
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
`;
export const code4 = `// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
`;
export const code5 = `// 模块定义
define(id?: String, dependencies?: String[], factory: Function|Object);
// 通过return方式导出
define(['GameBg', 'GrassLand'], function (GameBg, GrassLand) {
    var Bird = function (idName) {
       // ...
    };
    return Bird;
});`;
export const code6 = `// 模块引用
require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
// 运行代码
});`;
export const code7 = `// CMD
define(function(require, exports, module) {
var a = require('./a')
a.doSomething()
// 此处略去 100 行
var b = require('./b') // 依赖可以就近书写
b.doSomething()
// ...
})

// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
a.doSomething()
// 此处略去 100 行
b.doSomething()
...
})

// CMD模块模块导入
seajs.use('./js/part1.js',function (dom) {
    console.log(dom);
    let a = dom('#box');
    console.log(a);
}); `;

export const code8 = `
// factory将作为整个插件的返回对象
(function(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        // CommonJS
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        // AMD
        define(factory);
    else {
       // ESM 还是全局变量
        var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
        for (var i in a)
            (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
}(this, function() {
    return {
        name: '我是一个umd模块'
    }
}))
`;

export const code9 = `
// 导出方式
export { myFunction }; // 导出早前定义的函数
export default 'hello world'; // default export
export const name = 'yj'; // named export
// 导入方式
import lib from './lib'; // default import
import * as lib from './lib'; // 
import { method1, method2 } from './lib';

// 动态导入
import('./lib').then(module => {
    console.log(module.default.a);
    console.log(module.default.b);
    console.log(module.c);
});`;

export const code10 = `
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}
 
// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
`;

export const code11 = `
<script type="module" >
  import * from './module.js'
  console.log('module')
</script>
`;
export const code12 = `
// index.mjs esm模块相互导入
import foo from './test.mjs';
console.log(foo)

// test.mjs
export default function foo(){
    return 'hello foo'
}`;
export const code13 = `
// 不能使用require
// cjs模块加载是同步的过程，esm属于异步调用时执行，所以在cjs中需要等待拿到esm的导出值
// cjs模块中导入esm
async function test() {
    const bar = await import('./test.mjs')
    // use bar
    console.log(bar)
    console.log('cjs导入esm')
}
test()
`;

export const code14 = `
{
  "presets": [
      [
        "es2015",
        {
          "modules": "umd" 
        }
      ]
  ],
  "plugins": []
}`;

export const code15 = `
<script src="src/jquery.min.js" ></script>
<script src="src/bootstrap.min.js" ></script>
`;
export const code16 = `
// import 基本语法
import React from 'react';    //等价于 var React = require("react");
import { stat, exists, readFile } from 'fs';
// 等价于 
// var fs = require('fs');
// var stat = fs.stat, exists = fs.exists, readFile = fs.readFile;
`;
export const code17 = `
// gulp scss预处理任务
gulp.task('styles', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
`;
export const code18 = `
// webpack.dev.config.js
let path = require('path'),
      webpack = require('webpack');

let resolve = path.resolve;
let webRootDir = resolve(__dirname, '../');

module.exports = {
    entry: {                 
      // 入口文件，打包通过入口，找到所有依赖的模块，打包输出
        main: resolve(webRootDir, './src/main.js'), 
    },
    output: {
        path: resolve(webRootDir, './build'),  // 输出路径
        publicPath: '/build/',     // 公共资源路径
        filename: '[name].js'      
      // 输出文件名字，此处输出main.js, babel-polyfill.js ,  
      // 视情况可以配置[name].[chunkhash].js添加文件hash, 管理缓存
    },
    module: {
        rules: [   //模块化的loader，有对应的loader，该文件才能作为模块被webpack识别
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 5 version", "Firefox' +
                ' 15"]}!sass-loader?sourceMap&outputStyle=compressed'
            }
        ]
    },

    resolve: {
        extensions: ['.js'],  
        // 定义后缀名 ，import时可以省略“.js”后缀
        alias: {   
          // 别名。 如 import "./src/style/common.css"  ==> 
          // import "style/common.css"
            'components': resolve(webRootDir, './src/components'),
            'page': resolve(webRootDir, './src/page'),
            'style': resolve(webRootDir, './src/style'),
            'script': resolve(webRootDir, './src/script'),
            'static': resolve(webRootDir, './static')
        }
    },

    devServer: { // webpack-dev-server 热加载的配置
      //本地ip, 如需局域网内其他及其通过ip访问，配置"0.0.0.0"即可
        host: '127.0.0.1',   
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: true,
        noInfo: true
    },

    performance: {
        hints: false
    },
}

module.exports.devtool = '#source-map'
/*插件*/ 
module.exports.plugins = (module.exports.plugins || []).concat([
    // webpack 变量定义，，可在其他模块访问到该变量值，以便根据不同环境来进行
    // 不同情况的打包操作。
    // 例如，在main.js 下 console.log( process.env.Node_ENV ) 
    // 输出 development字符串
    new webpack.DefinePlugin({
        'process.env': {     
            NODE_ENV: "development"
        }
    }),
])
`;
