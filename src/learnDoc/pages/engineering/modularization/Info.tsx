import { Card, Typography } from 'antd';
import OverView from './OverView';
import SimpleCode from '../../../components/SimpleCode';
import { code1, code10, code11, code12, code13, code14, code2, code3, code4, code5, code7, code8, code9 } from './code';
const { Title, Paragraph, Text } = Typography;

export default function Info() {
  return (
    <div className='info-container'>
      <Title level={3}>前端模块化</Title>
      <Paragraph>
        <Title level={5} id="m-3-1">模块化规范总览</Title>
        <OverView />
      </Paragraph>
      <Title level={3} id="m-3">模块化的形成</Title>
      <Title level={4} id="summary">发展之初存在的问题</Title>
      <Paragraph>
        JS设计之初，只是想写一些简单的网页动效，随着web技术的迅速发展，网页内容越来越丰富，在还没有形成模块化规范前，代码体量，逻辑复杂度日益增强，随之也带来一系列的问题
        <ul>
          <li>代码的堆砌</li>
          <li>命名冲突</li>
          <li>文件依赖</li>
        </ul>
      </Paragraph>
      <Title level={4} id="summary-1">模块化面临什么问题</Title>
      <Paragraph>
        js模块化需要解决那些问题：
        <ul>
          <li>如何安全的包装一个模块的代码？（不污染模块外的任何代码）</li>
          <li>如何唯一标识一个模块？</li>
          <li>如何优雅的把模块的API暴漏出去？（不能增加全局变量）</li>
          <li>如何方便的使用所依赖的模块？</li>
        </ul>
      </Paragraph>
      <Title level={4} id="m-1">模块化的意义</Title>
      <Paragraph>
        模块化就是把单独的一个功能封装到一个模块（文件）中，模块之间相互隔离，但是可以通过特定的接口公开内部成员，也可以依赖别的模块。
      </Paragraph>
      <Title level={5}>可维护性</Title>
      <Paragraph>
        代码的可维护性的一种理解是，新功能的添加无需修改已有代码，旧有功能的变更无需修改多处代码。
      </Paragraph>
      <Paragraph>
        对于初期需求不明确，需要采用不断迭代方式开发的项目，代码可维护性就显的尤为重要。（可以理解为在频繁的功能迭代中新增功能或者修改已有功能时，能最快速、便捷地修改代码）
      </Paragraph>
      <Title level={5}>代码复用</Title>
      <Paragraph>
        代码复用不仅仅是为了节省开发时间，同时也是保证代码质量的有效手段，代码的复用程度越高，其质量就越容易得到保证。
      </Paragraph>
      <Title level={5}>多人协作</Title>
      <Paragraph>
        大型应用无法通过一人之力完成，多人协作是不可避免的。在多人协作的环境下，经常要面临修改或使用别人写的代码的问题。只有那些功能单一，接口明确，模块化代码我们才敢放心大胆的修改或使用。
      </Paragraph>
      <Title level={5}>性能</Title>
      <Paragraph>
        模块化的代码可以实现按需加载，进而保证了我们不会把宝贵的页面加载时间浪费在下载和解释多余的代码上
      </Paragraph>
      <Title level={4} id="m-2">早期解决方案</Title>
      <Title level={5}>命名空间</Title>
      <Paragraph>
        用于解决遍地的全局变量，将需要定义的部分归属到一个对象的属性上，不过本质上也是全局变量
      </Paragraph>
      <Title level={5}>IIFE</Title>
      <Paragraph>
        IIFE（立即执行函数） 就是将一整段代码包裹在一个函数中，然后立即执行这个函数。在 JavaScript 中，每个函数都有一个作用域，所以在函数中声明的变量就只在这个函数中可见。即使有变量提升，变量也不会污染到全局作用域中。
      </Paragraph>
      <Paragraph>
        IIFE 这种方式可以说是模块化的先河，它让开发者可以将模块放在单独的文件中，并且不污染全局作用域。
      </Paragraph>
      <Paragraph>
        <Text type='warning'>
          当然 IIFE 也有缺点，它并没有一个明确的依赖树，这使得开发者只能自己确保 JS 文件的加载顺序。
        </Text>
      </Paragraph>

      <Title level={4} id="m-4">CommonJS</Title>
      <Paragraph>
        CommonJS 是以在浏览器环境之外构建 JavaScript 生态系统为目标而产生的项目，比如在服务器和桌面环境中
      </Paragraph>
      <Paragraph>
        CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式，可以使每个模块在它自身的命名空间中执行，并且可以确保文件的加载顺序
      </Paragraph>
      <Paragraph>
        该规范的主要内容是，模块必须通过 module.exports 导出对外的变量或接口，通过 require() 来导入其他模块的输出到当前模块作用域中。
      </Paragraph>
      <Title level={5}>模块化规范</Title>
      <Paragraph>
        <ul>
          <li>暴露模块：module.exports = value或exports.xxx = value其中exports是对module.exports的一个引用</li>
          <li>引入模块：require(xxx),如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径</li>
        </ul>
        <SimpleCode value={code1} height={150} />
      </Paragraph>
      <Title level={5} id="m-4-1">module</Title>
      <Paragraph>
        CommonJS中每个模块内部，module变量代表当前的模块，是一个对象，它拥有的exports属性（module.exports）是对外的接口，加载某个模块，实际上是加载该模块的module.exports属性。
      </Paragraph>
      <Paragraph>
        如下：在控制台中输出了module变量，下面我们来分析下输出的内容：
        <SimpleCode value={code2} height={350} />
        参数解析
        <ul>
          <li>module.id 模块的识别符，通常是带有绝对路径的模块文件名。</li>
          <li>module.filename 模块的文件名，带有绝对路径</li>
          <li>module.loaded 返回一个布尔值，表示模块是否已经完成加载</li>
          <li>module.parent 返回一个对象，表示调用该模块的模块</li>
          <li>module.children 返回一个数组，表示该模块要用到的其他模块。</li>
          <li>module.exports 表示模块对外输出的接口</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-4-2">exports</Title>
      <Paragraph>
        node为每一个模块提供了一个exports变量(可以说是一个对象)，指向 module.exports。这相当于每个模块中都有一句这样的命令 var exports = module.exports；不过如果直接为export赋值，则不能写成exports=xx，而应该写成module.exports=xx，因为exports在这里只是一个引用。
      </Paragraph>
      <Title level={5} id="m-4-3">模块加载机制</Title>
      <Paragraph>
        在 NodeJs 中引入模块 (require)，需要经历如下 3 个步骤：
        <ul>
          <li>路径分析+文件定位</li>
          <li>模块实例化</li>
          <li>编译执行</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <Text strong>(1)、路径分析+文件定位：</Text>
      </Paragraph>
      <Paragraph>
        CommonJS中require对文件标识符的识别规则如下（nodejs官方描述的解析流程）：
      </Paragraph>
      <Paragraph>
        在 Y 路径下，require(X)
        <ul>
          <li>如果X是内置模块（http, fs, path 等）, 直接返回内置模块，不再执行</li>
          <li>如果 X 以 '/' 开头，把 Y 设置为文件系统根目录</li>
          <li>如果 X 以 './'， '/'， '../' 开头
            <ul>
              <li> a. 按照文件的形式加载（Y + X），根据 extensions 依次尝试加载文件 [X, X.js, X.json, X.node] 如果存在就返回该文件，不再继续执行。</li>
              <li>  b. 按照文件夹的形式加载（Y + X），如果存在就返回该文件，不再继续执行，若找不到将抛出错误</li>
            </ul>
            <ul>
              <li> a. 尝试解析路径下 package.json main 字段</li>
              <li>b. 尝试加载路径下的 index 文件（index.js, index.json, index.node）</li>
            </ul>
          </li>
          <li>搜索 NODE_MODULE，若存在就返回模块a. 从路径 Y 开始，一层层往上找，尝试加载（路径 + 'node_modules/' + X）b. 在 GLOBAL_FOLDERS node_modules 目录中查找 X</li>
          <li>抛出 "Not Found" Error</li>
        </ul>
        执行入口文件，触发require特有的文件加载机制，识别当前所有依赖，并且存储依赖模块的path作为模块唯一标识
      </Paragraph>
      <Paragraph>
        <Text strong>(2)、模块实例化</Text>
      </Paragraph>
      <Paragraph>
        解析完文件路径，根据path查询模块缓存集中是否存在实例化的模块对象，如果不存在，则创建模块实例，读取文件内容，将关键信息存入模块缓存集。
      </Paragraph>
      <Paragraph>
        <Text strong>(3)、编译求值</Text>
      </Paragraph>
      <Paragraph>
        在CommonJS中创建完模块实例之后，会直接进行编译执行，将最终的结果挂载到模块实例的exports上，最后导出Module.exports内容；
      </Paragraph>
      <Paragraph>
        但是如果执行完路径分析+文件定位之后，在模块缓存集中能查询到指定的模块实例，则不会再次进行编译执行，会直接导出Module.exports内容；
      </Paragraph>
      <Paragraph>
        通过分析CommonJS的模块加载流程，我们可以总结出来该规范下的模块加载特性，即：
      </Paragraph>
      <Paragraph>
        Module.exports导出的是一个原始类型的值，会被缓存下来，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值，除非写成一个函数，才能得到内部变动后的值；
        <SimpleCode value={code3} height={200} />
        上面代码输出内部变量counter和改写这个变量的内部方法incCounter。
        <SimpleCode value={code4} height={200} />
        以看出，counter输出以后，lib.js模块内部的变化就影响不到counter了。
      </Paragraph>
      <Title level={5} id="m-4-4">优势</Title>
      <Paragraph>
        <ul>
          <li>所有代码都运行在模块作用域，不会污染全局作用域。</li>
          <li>模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。</li>
          <li>模块加载的顺序，按照其在代码中出现的顺序。</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-4-5">存在的问题</Title>
      <Paragraph>
        <ul>
          <li>同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的</li>
          <li>不能非阻塞的并行加载多个模块</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-4-6">浏览器模块化和服务端模块化有什么区别？</Title>
      <Paragraph>
        <ul>
          <li>服务端加载一个模块，直接就从硬盘或者内存中读取了，消耗时间可以忽略不计</li>
          <li>浏览器需要从服务端下载这个文件，所以说如果用CommonJS的require方式加载模块，需要等代码模块下载完毕，并运行之后才能得到所需要的API。</li>
        </ul>
      </Paragraph>
      <Title level={4} id="m-5">AMD</Title>
      <Paragraph>
        为了实现浏览器端的模块化，在CommonJS规范推出后不久，就相继推出了AMD和CMD规范
      </Paragraph>
      <Title level={5}>requirejs in amd</Title>
      <Paragraph>
        2010 年推出了遵循 AMD 规范的模块加载器 RequireJS；
        AMD（异步模块定义）是为浏览器环境设计的，因为 CommonJS 模块系统是同步加载的，当前浏览器环境还没有准备好同步加载模块的条件。所以AMD 定义了一套 JavaScript 模块依赖异步加载标准，来解决同步加载的问题
      </Paragraph>
      <Title level={5}>模块化规范</Title>
      <Paragraph>
        <SimpleCode value={code4} height={200} />
        <ul>
          <li>id ：是模块的名字，它是可选的参数，不填默认使用文件名。</li>
          <li>dependencies ：指定了所要依赖的模块列表，它是一个数组，也是可选的参数。每个依赖的模块的输出都将作为参数一次传入 factory 中。如果没有指定 dependencies，那么它的默认值是 ["require", "exports", "module"]。</li>
          <li>factory ：是最后一个参数，它包裹了模块的具体实现，它是一个函数或者对象。如果是函数，那么它的返回值就是模块的输出接口或值，函数params参数依次为引入依赖模块的名称；如果是对象，此对象应该为模块的输出值。</li>
        </ul>
        <SimpleCode value={code5} height={100} />
        require()函数接收两个参数：
        <ul>
          <li>第一个参数是一个数组，指定了所有的依赖模块；</li>
          <li>第二个参数是一个回调函数，当前面指定模块都加载成功后，它将被调用，加载的模块会以参数形式传入，从而在回调函数内部就可以调用这些模块；</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-5-1">模块加载机制</Title>
      <Paragraph>
        AMD模块加载机制实质上是将每个模块当成一个js脚本文件，动态添加到html中，使用异步的方式加载脚本；
      </Paragraph>
      <Paragraph>
        浏览器加载脚本会与服务器进行通信，这是一个未知的请求，如果使用同步的方式加载，就可能会一直阻塞下去。为了防止浏览器的阻塞，我们要使用异步的方式加载脚本。因为是异步加载，所以与模块相依赖的操作就必须得在脚本加载完成后执行，这里就得使用回调函数的形式
      </Paragraph>
      <Title level={5} id="m-5-2">流程解析</Title>
      <Paragraph>
        同理我们的CommonJS加载机制，整体依旧分为三步，<Text type='warning'>注：首先是触发入口文件的加载，查找是否有依赖模块，有的话则再触发依赖模块的加载，整体遍历加载，整个过程中会将各个模块的信息存入Module缓存集中，直到遍历完成所有文件的加载，再从入口文件开始对所有依赖文件factory进行执行，执行完所有依赖文件后才去执行入口文件factory。</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>(1)、路径分析+文件定位：</Text>
      </Paragraph>
      <Paragraph>
        识别require路径，定位文件path，识别方式与CommonJS不同，该识别方式遵循的是浏览器对模块标识符的识别方式，必须补全文件扩展名，识别模块依赖，最终形成一个有序的依赖集
      </Paragraph>
      <Paragraph>
        <Text strong>(2)、模块实例化</Text>
      </Paragraph>
      <Paragraph>
        注册一个全局对象，将已加载的模块放入对象(registry)中，类似于CommonJS中的模块缓存集；在模块解析阶段模块缓存集中存入的是各个模块已经执行完成的return的值，这一点同CommonJS，只有在首次加载(isDefine=false)时会执行模块导出方法，否则会直接读取模块缓存中exports内容
      </Paragraph>
      <Paragraph>
        <Text strong>(3)、编译求值</Text>
      </Paragraph>
      <Paragraph>
        与CommonJS同步加载不同，浏览器端异步加载的实现原理是动态创建script标签，动态引入模块文件，对于文件加载先后顺序控制，AMD引入了模块加载状态，依赖的是第一步中有序的模块依赖集合，每个动态引入的模块文件都会被创建一个事件监听，执行完成才会触发下一个依赖的执行。所有依赖模块都执行完毕才会触发当前模块的执行，这一点与CMD依赖处理循序不同
      </Paragraph>
      <Paragraph>
        <Text strong>requirejs模块的加载顺序是不固定的，但是执行顺序是固定的。</Text>
      </Paragraph>
      <Title level={5} id="m-5-3">优势</Title>
      <Paragraph>
        <ul>
          <li>适合在浏览器环境中异步加载模块，避免网页失去响应</li>
          <li>可以并行加载多个模块，管理模块之间的依赖，便于代码的编写和维护</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-5-4">存在的问题</Title>
      <Paragraph>
        <ul>
          <li>API相对复杂，提高了开发成本</li>
          <li>不符合通用的模块化思维方式，是一种妥协的实现</li>
        </ul>
      </Paragraph>
      <Title level={4} id="m-6">CMD</Title>
      <Paragraph>
        <Title level={5}>seajs in cmd </Title>
        CMD是SeaJS 在推广过程中对模块定义的规范化产出,CMD(Common Module Definition)表示通用模块定义，该规范是国内发展出来的，由阿里的玉伯提出
        <ul>
          特点：
          <li>对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行（根据写法不同，处理方式不通过）</li>
          <li>CMD推崇依赖就近，AMD推崇依赖前置</li>
        </ul>
        <Title level={5}>模块化规范</Title>
        AMD和CMD写法的区别：
        <SimpleCode value={code7} height={400} />
      </Paragraph>
      <Title level={5} id="m-6-1">模块加载机制</Title>
      <Paragraph>
        加载机制同理AMD，不同的是CMD依赖模块是延迟执行
      </Paragraph>
      <Paragraph>
        <Text strong>(1)、路径分析+文件定位</Text>
      </Paragraph>
      <Paragraph>
        从入口文件开始遍历所有依赖文件，通过factory.toString()，提取所有依赖模块关键信息(模块加载方法)；
        （seajs框架实现的代码静态分析，不同于ES Module运行环境本身就支持代码静态分析）
      </Paragraph>
      <Paragraph>
        <Text strong>(2)、模块实例化</Text>
      </Paragraph>
      <Paragraph>
        将模块信息存入cacheModule中
      </Paragraph>
      <Paragraph>
        <Text strong>(3)、模块编译求值</Text>
      </Paragraph>
      <Paragraph>
        模块求值阶段分为：加载和执行两部分，两者并非线性的；
        <ul>
          <li>加载完所有依赖模块后，从入口模块开始执行factory回调，遇到require依赖的模块，则去执行改依赖模块的回调；</li>
          <li>整体加载机制同AMD，不同之处就是在第三步：编译求值阶段，AMD是依赖预执行，CMD会优先执行当前模块，等执行到require依赖时，再去动态执行依赖模块；</li>
        </ul>
      </Paragraph>
      <Title level={5} id="m-6-4">存在的问题</Title>
      <Paragraph>
        <ul>
          <li>我们能够看到，按照 CMD 规范的依赖就近的规则定义一个模块，会导致模块的执行逻辑偏重，有时你并不知道当前模块具体依赖了哪些模块或者说这样的依赖关系并不直观；</li>
          <li>在使用两者规范的前提下，必须依赖第三方库；</li>
          <li>而且对于 AMD 和 CMD 来说，都只是适用于浏览器端的规范，而 Node.js module 仅仅适用于服务端，都有各自的局限性。</li>
        </ul>
      </Paragraph>
      <Title level={4} id="m-7">UMD</Title>
      <Paragraph>
        UMD 出现，整合了 CommonJS 和 AMD 两个模块定义规范的方法
      </Paragraph>
      <Paragraph>
        所谓UMD (Universal Module Definition)，就是一种javascript通用模块定义规范，让你的模块能在javascript所有运行环境中发挥作用
        <SimpleCode value={code8} height={350} />
      </Paragraph>
      <Title level={5} id="m-7-1">实现原理</Title>
      <Paragraph>
        首先，一个优美的JS库都会在一个IIFE(立即调用的函数表达式)中去书写自己的代码，以Jquery.js为例，这个匿名函数接收两个参数：
        <ul>
          <li>global(当期执行作用域链的对象)；</li>
          <li>factory(回调)，也就是工厂函数，它只负责返回你需要导出的内容（对象，函数，变量等）；</li>
        </ul>
        也就是说我们自定义一个匿名函数，然后把它当做实参传给了自执行函数，然后在自执行函数内部通过形参来访问这个工厂方法（或者你会更熟悉回调函数或callback这样的叫法），把它挂在到全局对象上，这样就完成了基本的模块导出。
      </Paragraph>
      <Paragraph>
        所以我们只需要在自执行函数中对当前模块规范去做判断，并遵循相应的模块化返回规范，将模块导出；
      </Paragraph>
      <Title level={5}>缺点</Title>
      <Paragraph>
        代码量：兼容需要额外的代码，而且是每个文件都要写这么一大段代码
      </Paragraph>
      <Title level={4} id="m-8">ES Module</Title>
      <Paragraph>
        在 ES6 模块化规范诞生之前，Javascript 社区提出的 AMD、CMD、CommonJS 等模块化规范。但是，这些社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准
      </Paragraph>
      <Paragraph>
        AMD 和 CMD 适用于浏览器端的 Javascript 模块化 ，CommonJS 适用于服务器端的 Javascript 模块化,并不统一 ，还是比较乱 ，后来ES6 语法规范中，在语言层面上定义了模块化规范；
      </Paragraph>
      <Paragraph>
        2015 年 6 月，ECMAScript6 标准正式发布，整合Commonjs、AMD、CMD旨在在语言标准层面实现模块化，成为浏览器和服务器通用的模块解决方案。
      </Paragraph>
      <Title level={5} id="m-8-1">模块化规范</Title>
      <Paragraph>
        不同于以上几种模块化规范，ESM(ES 模块的缩写)是语法层面的模块化标准，import和export关键词是不能使用console.log打印的
        <SimpleCode value={code9} height={300} />
        <Text type='warning'>注：通过export方式导出，在导入时要加{ }，export default则不需要，default只能有一个值，所以一个文件内不能有多个export default；</Text>
      </Paragraph>
      <Title level={5} id="m-8-2">流程解析</Title>
      <Paragraph>
        对于 ES 模块来说，这个过程主要分三步来进行
        <ol>
          <li>加载 —— 寻找，下载并解析所有文件成模块记录</li>
          <li>实例化 —— 在内存中寻找位置存放所有导出的值（但是暂时还不要给他们填上具体的值）然后让导出和导入都指向这些内存中的位置。这个过程也叫做链接(linking)。</li>
          <li>求值 —— 执行编码并给实例化中所对应的内存的位置填充实际的值</li>
        </ol>
      </Paragraph>
      <Paragraph>
        CommonJS的加载和执行任务是线性执行的，并没有静态分析的阶段
      </Paragraph>
      <Paragraph>
        requireJS和seaJS插件自身实现了静态分析的功能
      </Paragraph>
      <Paragraph>
        ES Module是语言层面的模块规则，在自身的运行环境下就支持静态分析
      </Paragraph>

      <Paragraph>
        <Text strong>(1)、路径分析+文件定位</Text>
      </Paragraph>
      <Paragraph>
        加载文件的是模块加载器(loader), 每个宿主都有各自的方法来解析模块标识符的字符串。对于浏览器来说，它只接受 URL 作为模块标识符。不同于CommonJS的require模块加载器，基于你使用的不同的平台可以有不同的加载器。
      </Paragraph>
      <Paragraph>
        <Text strong>(2)、模块实例化+编译求值</Text>
      </Paragraph>
      <Paragraph>
        ES Module对模块的解析流程中实例化和求值这两步是可以分开执行的，不同于CommonJs的同步执行，ESM只有在值调用时才执行export方法；
      </Paragraph>
      <Paragraph>JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。
      </Paragraph>
      <Paragraph>其中实例化这一步创建了整个模块的依赖树，导出模块但是不做计算；</Paragraph>
      <Paragraph>等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
        <SimpleCode value={code10} height={300} />
        <Text type='warning'>ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。</Text>
      </Paragraph>
      <Title level={5}>ES Module in Browser</Title>
      <Paragraph>
        由于 ES Module 的执行环境和普通脚本不同，浏览器选择增加 只有 script type="module" 中的脚本（和 import 进来的脚本）才是 module 模式。
        <SimpleCode value={code11} height={100} />
      </Paragraph>
      <Title level={5}>ES Module in Node.js</Title>
      <Paragraph>
        Node.js 8.5.0发布了对ECMAScript模块的实验性支持，增加.mjs扩展名文件，这种ECMAScript模块的支持是需要在后面加上--experimental-modules标识来运行。 </Paragraph>
      <Paragraph>
        在兼顾存量代码的前提下，如何去完善Node.js对ES Module的支持呢，当前有以下几种方案:
        选择增加新的扩展名 .mjs，会被识别为 ES Module模块
        <ul>
          <li>在 .mjs 中可以自如使用 import 和 export</li>
          <li>在 .mjs 中不可以使用 require</li>
          <li>在 .js 中只能使用 require</li>
          <li>在 .js 中不可以使用 import 和 export</li>
        </ul>
        运行命令：node --experimental-modules index.mjs（Nodejs v12.17.0 LTS 版发布，去掉 --experimental-modules 标志，但仍处于测试阶段）
        <SimpleCode value={code12} height={100} />
        <SimpleCode value={code13} height={120} />
      </Paragraph>
      <Paragraph>
        由于历史遗留问题， ESM 和 CJS及其他现存的模块系统之间的交互总是会或多或少遇到一些坑，这样的讨论也到处可见，所以团队中还是应该遵循统一的 模块导入导出 标准，能基于约定形成一套标准在之后需要改变迁移的时候可能也会更加方便一些。</Paragraph>
      <Paragraph>
        虽然当前无论是浏览器端还是服务端对ES Module的支持都不是很好，
      </Paragraph>
      <Title level={5}>优势和不足</Title>
      <Paragraph>
        优势
        <ul>
          <li>ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。</li>
          <li>ES6 模块设计思想：尽量的静态化、使得编译时就能确定模块的依赖关系，以及输入和输出的变量（CommonJS和AMD模块，都只能在运行时确定这些东西）。</li>
        </ul>
      </Paragraph>
      <Paragraph>
        不足
        <ul>
          <li>原生浏览器端还没有完全实现该标准</li>
          <li>全新的命令字，新版的 Node.js才支持</li>
        </ul>
        <Text type='secondary'>注：就是在react里使用Es6的语法的时候，我们会引入一些模块。这些模块有的是以路径的形式有的是以简单的一个字符串形式存在，对于路径的这种都熟悉。但是对于简单字符串的这种不熟悉，其实对于es6的代码我们是要经过babel或者traceur转成es5的，import在转换的时候变成require的这种，此时的这种可用于服务端的，但是想用在浏览器端就要借助Browserify或者webpack等工具来帮助我们对模块资源的获取整合打包了，它们主要利用自身的require机制把模块需要的资源和当前的模块文件进行重新整合打包成新文件，以至于在客户端时候，使用的是已经打包好的这个文件，此时的这个文件包含着需要的各个资源。</Text>
      </Paragraph>
      <Paragraph>
        因为es6的模块是构建在语言语法支持上的。全面使用还需要很长时间，因为服务器端的commonjs模式的模块和浏览器段(AMD, UMD ,ad hoc)的代码太多了。这种过度需要很长时间。在这期间模块的转译器/转换器是必须的。<Text type='danger' strong>Es6模块语法的好处是JavaScript引擎可以静态的分析决定要导出的API成员。这里给出的建议是无论你使用那种模块格式。你都要必须理解Es6的模块，因为它是js的未来，</Text>虽然这需要很长时间。
      </Paragraph>
      <Title level={4} id="m-8-3">模块的编译构建</Title>
      <Paragraph>
        通过对以上各种js模块化规范的介绍，ES Module是语言层面的规范，也将必然成为未来的趋势，但是因为服务器端的Commonjs模式的模块和浏览器端(AMD, UMD ,ad hoc)的代码太多了，并且浏览器端对ES6语法的支持也不全面，这种过度需要很长时间。
      </Paragraph>
      <Paragraph>
        所以在这期间模块的转译器/转换器是必须的，下面我们来看下babel和webpack编译构建工具是如何对代码做的兼容处理
      </Paragraph>
      <Title level={5}>babel(语法转换)</Title>
      <Paragraph>
        浏览器很多都不支持es6的语法，或者仅仅是部分支持，babel就承担了“翻译”的角色，把es6，es7的写法转换成es5的写法
      </Paragraph>
      <Title level={5}>转换规则</Title>

      <Paragraph>
        babel：转码 es6 语法，配合一些列 babel 工具链可以将新的 es2015+ 代码转换成所有浏览器支持的 es代码，babel 默认是将 es6 模块转换成 commonjs 模块，如下图
      </Paragraph>
      <Title level={5}>导出模块类型配置参数：modules</Title>
      <Paragraph>
        <SimpleCode value={code14} height={180} />
        该参数的含义是：启用将ES6模块语法转换为另一种模块类型。将该设置为false就不会转换模块。默认为 commonjs；
      </Paragraph>
      <Paragraph>
        该值可以有如下：
        'amd' | 'umd' | 'systemjs' | 'commonjs' | false
      </Paragraph>
      <Paragraph>
        根据运行环境来选择可识别的模块规范来编译代码
      </Paragraph>
    </div>
  )
}
