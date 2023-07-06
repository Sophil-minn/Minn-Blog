import { Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function WebEngineeringInfo() {
  return (
    <div className='info-container'>
      <Title level={3} id="theory">一、概念</Title>
      <Paragraph>
        将前端项目当成一项系统工程进行分析、组织和构建从而达到项目结构清晰、分工明确、团队配合默契、开发效率提升的目的
      </Paragraph>
      <Title level={3} id="why-need-engineering">二、为什么需要工程化</Title>
      <Paragraph>
        随着近些年来前端技术的不断发展，越来越多复杂的业务放在了前端，前端不再是以前几个HTML + CSS + javascript就能解决的了。业务复杂了，需要维护的代码量就自然多了，如此一来，前端代码的<Text strong>可靠性，可维护性，可拓展性</Text>，以及前端web应用的性能，开发效率等等各方面就成了不得不考虑的问题。
      </Paragraph>
      <Paragraph>
        阶段的前端工程化，需要考虑到各个方面，包括但不限于以下这几点：
      </Paragraph>
      <Title level={4} id="Efficiency">2.1、提升开发效率</Title>
      <Title level={5}>webpack-dev-server 热加载</Title>
      <Paragraph>
        webpack-dev-server 替我们解决了这个问题，它有两种模式，两种模式，一种是 watch 模式，功能是你修改代码，自动帮你刷新页面，无需手动刷新；另一种更加强大，基于 websocket 全双工通信技术，直接无刷新帮你把修改的代码替换掉。 从而极大程度上提高了开发效率。
      </Paragraph>
      <Title level={5}>数据mock</Title>
      <Paragraph>
        在后端接口还没提供的时候，前后端制定好共同的接口协议，开发时前端可以使用mock模拟数据，与后端彻底分离，并行开发。<Text strong>面向接口编程</Text>，尽可能减少前后端沟通成本。
      </Paragraph>
      <Title level={4} id="performance">2.2、优化性能</Title>
      <Title level={5}>代码合并压缩，混淆加密</Title>
      <Title level={5}>减少小图片请求</Title>
      <Paragraph>
        webpack中url-loader:loader: 'url-loader?limit=8192'，使得小于8kb的图片使用data:image base64 编码内联，减少图片请求量
      </Paragraph>
      <Title level={5}>部署静态文件缓存管理</Title>
      <Paragraph>使用webpack的内置的chunkhash功能，可以给生成的js文件添加hash后缀，标识文件版本</Paragraph>
      <Title level={4} id="qulity">2.3、提高代码质量</Title>
      <Title level={5}>模块化</Title>
      主要指 js 代码的模块化。以前的前端开发并没有模块化这个概念，这给维护大型项目带来了极大的困难。发展到现在的前端有很多模块化的方法可供选择，如seajs ，requirejs， webpack 等。 模块化能很大程度上提高了代码的可维护性。
      <Title level={5}>CSS 预处理</Title>
      通过sass，less 等css 预处理器，可以实现 css 文件的拆分，颗粒化，实现css可复用。而且通过autoprefixer或postcss 还可以让 css 样式对老旧浏览器向下兼容。
      此外，通过使用 css-modules 能够避免css全局污染的问题，极大提高css代码的可控性，不需要设定一堆命名空间与命名规范来限制。
      <Title level={5}>ES6 + babel 编译</Title>
      javascript本身设计存在一定程度上的缺陷，例如“没有模块化”，“没有块级作用域”，“全局变量污染”，“回调地狱”等等之类的问题，为了改善这些缺陷，计算机协会在2015年推出了ECMAScript 6 标准（今年已经ES8 已经发布了），使用ES6的语法除了能有效减少代码量之外，还引入了块级作用域，模块化，类的语法糖，promise以及一些新的API，很大程度上填了以前javascript的遗留下的坑，以及提高了代码质量。
      不过即便过了两年，ES6也并没有被市面的主流浏览器完全支持，所以我们还需用 babel 将ES6 编译成ES5，再将一些不支持的API polyfill 处理。
      <Title level={5}>eslint 代码检查</Title>
      一直一来，代码风格都是一场无休止的争论，每个人都有自己的代码风格习惯，而这些习惯无非就是tab还是空格，换不换行，加不加空格等等之类的琐事，与其通过制定规范去强行限制开发者的编写习惯，不如从工具层面彻底解决代码风格的问题。eslint可以自动处理一些代码风格的问题，直接将代码通过指定的规则格式化，使代码整体风格统一。
      更进一步，eslint 还可以禁止代码的一些可能造成不良影响的行为（例如eval，未定义变量），使其抛出错误。降低代码产生bug的可能性。
      <Title level={5}>单元测试</Title>
      集成单元测试，提高代码可靠性。前端较为流行的单元测试 mocha，qunit 等
      <Title level={5}>UI 自动化测试</Title>
      UI 自动化测试是 软件通过模拟浏览器，对页面进行UI操作，判断是否产生预想的UI效果。目前较为流行的UI自动化测试套件主要是 基于phantomjs的 nightmare
      <Title level={5}>web组件化</Title>
      web组件化是通过自定义标签，从UI层面对代码的拆分，提高前端代码的可复用性。尽管w3c已经初步对web组件化制定了规范， 但目前浏览器对web 组件化的支持惨不忍睹，无法通过原生的方法来实现web组件，但目前流行的前端框架，如vue，angular，react都有提供自己的web组件化，从而提高代码可复用性
    </div>
  )
}
