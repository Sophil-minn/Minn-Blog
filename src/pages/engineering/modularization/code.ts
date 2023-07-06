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
