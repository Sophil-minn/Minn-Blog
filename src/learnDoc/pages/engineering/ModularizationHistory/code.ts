
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
