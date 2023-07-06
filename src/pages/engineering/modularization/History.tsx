import { Card, Typography } from 'antd';
import OverView from './OverView';
import SimpleCode from '../../../components/SimpleCode';
import { code1, code15, code16, code17, code18 } from './code';
const { Title, Paragraph, Text } = Typography;

export default function History() {
  return (
    <>
      <Title level={3}>前端模块化历史</Title>
      <Title level={4} id='h-1'>1、script 直接引入加载</Title>
      <Paragraph>
        在没有引入模块化的概念之前，前端往往需要手动处理js文件的依赖关系，例如；bootstartp 依赖 jquery，就需要在引入bootstrap之前引入jquery
        <SimpleCode value={code15} height={60} />
        如果引入js文件顺序错了则会报错。 乍一看似乎没什么难度呀，是人都能分清是吧。那么请看下面这种情况：
      </Paragraph>
      <Paragraph>
        有 a.js, b.js, c.js, d.js, e.js 五个文件，其中
        <ul>
          <li>a 依赖 b和e</li>
          <li>b 依赖 d和e，</li>
          <li>c 依赖 a和d，</li>
          <li>d 依赖 e</li>
          <li>e 无依赖。</li>
        </ul>
        那么根据以上关系，请按正确顺序引入js文件（黑人问号？？？）。当然，事实上也并不难区分其优先级，逐级递推就很快可以推断出引入顺序为 e,d,b,a,c。
      </Paragraph>
      <Paragraph>
        毫无疑问，对于稍微复杂点的web工程，存在复杂依赖情况是极有可能发生的，并且把时间耗费在管理依赖关系上也不值当。
        所以就诞生了前端模块化
      </Paragraph>
      <Title level={4} id='h-2'>2、模块化标准（AMD，CMD，ES6 Module）</Title>
      <Paragraph>
        经历了混乱加载的黑历史，我们终于迎来了js的模块化，忽如一夜春风来，一夜之间冒出一堆模块化标准。
        其中具有代表性的模块加载器分别是是遵循AMD（Asynchronous Module Definition）规范的RequireJS ，还有淘宝玉伯开源的 遵循CMD（Common Module Definition）规范的 SeaJS。 两者除了遵循规范不一样之外，封装模块有差别之外，都各有所长，而且对旧版本浏览器的支持都相当完美
      </Paragraph>
      <Paragraph>
        当然除了这两个，还有各类其他开发者开发的模块加载器，当真是一番群魔乱舞百家争鸣的盛世呀。在此就不一一细述了。
      </Paragraph>
      <Title level={5} id='h-2-1'>2.1、ES6 Module</Title>
      <Paragraph>
        ES6 Module 是新一代javascript标准 ECMAScript 6 的新增特性，其语法和Python相似，比较简洁易用。另外，相比于其他模块加载器，ES6 Module 是语法级别的实现，其静态代码分析相比于其他框架会更快更高效，方便做代码检测。
        <SimpleCode value={code16} height={80} />
        而且，且不论其API优劣，其语法与前面说的模块化有什么区别的，ES6 Module最大优点是显而易见的： 它是官方标准，而不是其他妖艳贱货第三方开发的框架/库。跟着有名分的原配混，毫无疑问是有前途更稳定的吧。
      </Paragraph>
      <Paragraph>
        当然，缺点也是很明显的，不同于RequireJS，SeaJS 向下兼容到极致（ie6+），ES6 Module 的兼容性还未覆盖绝大部分浏览器，支持ES6 Module的浏览器寥寥无几，虽然可以通过babel进行语法转译，不过兼容性毕竟是硬伤，唯有时间能治愈。
      </Paragraph>
      <Title level={5} id='h-2-2'>2.2、自动化构建工具（gulp，grunt）</Title>
      <Paragraph>
        从描述可知，前端工程化需要做的事情，单凭人力一个一个去处理基本没有可能完成，那么，我们就需要学会使用工具，毕竟程序猿和猿之间最大的区别就是会不会使用工具。
      </Paragraph>
      <Paragraph>
        grunt 和 gulp 就是自动化构建工具。我们通过安装对应的node_module，根据gulp/grunt 的API编写相对应的任务（如：css预处理，代码合并压缩，代码校验检查等任务，js代码转译），那么就可以生成我们想要的结果，完成前端工作流管理，极大程度地提高效率。其作用其实就相当于makefile 的make 操作，将手工操作自动化，其任务编写格式如下。
        <SimpleCode value={code17} height={100} />
      </Paragraph>
      <Title level={5} id='h-2-3'>2.3、模块化打包器（webpack）</Title>
      <Paragraph>
        前面说了那么多SeaJS，RequireJS的模块化 ，又有gulp ，grunt的自动化处理，想必都有点觉得这前端工程化的技术栈也太繁琐了吧。
        终极解决方案：Webpack。
      </Paragraph>
      <Paragraph>
        相比于seajs / requirejs 需要在浏览器引入 sea.js 、require.js 的模块解析器文件，浏览器才能识别其定义的模块。 webpack不需要在浏览器中加载解释器，而是直接在本地将模块化文件（无论是AMD，CMD规范还是ES6 Module）编译成浏览器可识别的js文件。
      </Paragraph>
      <Paragraph>
        另外，相对于gulp/grunt 的批处理工作流功能，webpack 也可以通过 loader、plugin的形式对所有文件进行处理，来实现类似的功能。
      </Paragraph>
      <Paragraph>
        其主要工作方式是： 整个项目存在一个或多个入口js文件，通过这个入口找到项目的所有依赖文件，通过loader，plugin进行处理后，打包生成对应的文件，输出到指定的output目录中。可以说是集模块化与工作流于一身的工具。
      </Paragraph>
      <Paragraph>
        当然，webpack也并非银弹。工具没有好坏，只有适合与否。即便是webpack也并非适用于所有场合。
      </Paragraph>
      <Paragraph>
        webpack 的最大特点是一切皆为模块，一切全包，最适和应用在SPA一站式应用场景。只有简单几个页面的情况下使用 webpack 反而可能会增加不必要的配置成本，反而直接用gulp或者其他工具处理代码压缩，css 预处理之类的工作会更加快捷易用。
      </Paragraph>
      <Paragraph>
        另外，除了最主流的 webpack 之外，同性质的模块化打包器还有 browserIfy，以及百度的 fis ，由于对这两者了解不多，就不一一比较了。
      </Paragraph>
      <Title level={4} id='h-3'>3、使用 webpack 实现工程化</Title>
      <Paragraph>webpack-dev-server的本地开发webpack配置</Paragraph>
      <SimpleCode value={code18} height={600} />
    </>
  )
}


