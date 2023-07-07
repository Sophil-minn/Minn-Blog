import { Card, Typography } from 'antd';
import { lazy } from 'react';
import { code1, code10, code11, code12, code13, code14, code15, code16, code17, code18, code19, code2, code20, code21, code22, code23, code24, code25, code26, code3, code4, code5, code6, code7, code8, code9 } from './code';

const SimpleCode = lazy(() => import('../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function Info() {
  return (
    <div className='info-container'>
      <Title level={3}>前端开发规范</Title>
      <Paragraph>
        每个开发人员的水平不同，技术关注点不同，如果没有一份代码规范的参照和约束，那么项目中的代码将会风格迥异，难以维护，为保证代码质量和风格统一，特此拟定一份 代码规范，这样整个团队的开发人员可以参照这份代码规范进行编码，从而让团队的代码风格统一，利于维护。
      </Paragraph>
      <Title level={4} id="w-1">1、基础规则</Title>
      <Paragraph>
        1.1、一个文件声明一个组件：
      </Paragraph>
      <Paragraph>
        尽管可以在一个文件中声明多个 React 组件，但是最好不要这样做；推荐一个文件声明一个 React 组件，并只导出一个组件；
      </Paragraph>
      <Paragraph>
        1.2、将组件定义成函数组件，函数组件里的业务处理相关逻辑单独抽出来封装在hooks中
      </Paragraph>
      <Title level={4} id="w-2">2、组件声明</Title>
      <Paragraph>
        （1）组件名称和定义该组件的文件名称建议要保持一致；
        <SimpleCode value={code1} height={150} />
      </Paragraph>
      <Paragraph>
        （2）不要使用 displayName 属性来定义组件的名称， function 关键字后面直接声明组件的名称。
        <SimpleCode value={code2} height={150} />
      </Paragraph>
      <Title level={4} id="w-3">3、React 中的命名</Title>
      <Paragraph>好的命名不仅可以使代码看起来简洁，并且维护起来也方便了许多</Paragraph>
      <Title level={5} id="w-3-1">3.1、不要嫌弃函数名过长</Title>
      <Paragraph>
        <SimpleCode value={code3} height={30} />
      </Paragraph>
      <Title level={5} id="w-3-2">3.2、变量 / 函数 命名头部</Title>
      <Paragraph>
        一般为动词，后面加上具体要做什么的名词
      </Paragraph>
      <Paragraph>
        _ : 一般用于表示私有的字段，不希望外部访问
      </Paragraph>
      <Paragraph>
        例如：_index
        当然也有写在尾部的风格
      </Paragraph>
      <Paragraph>
        例如：index_
      </Paragraph>
      <Title level={5} id="w-3-3">3.3、什么时候用 has ， 什么时候用 is</Title>
      <Paragraph>
        has 常用于表示有没有或者是否包含 / 而 is 常用于表示是不是，是否
        <SimpleCode value={code4} height={260} />
      </Paragraph>
      <Title level={5} id="w-3-4">3.4、函数变量 使用小驼峰命名规则 / 组件构造函数使用大驼峰 / 组件文件名使用下划线开头</Title>
      <Paragraph><SimpleCode value={code5} height={150} /></Paragraph>
      <Title level={5} id="w-3-5">3.5、使用缩写</Title>
      <Paragraph>
        注意点1： 通用性，不能随便拉出来一个单词就使用缩写，例如我想写一个 class 用于管理整个用户本地存储信息的获取、修改、删除等操作。可以这样命名这个class ：LocalUserInfoManage 或者说放到 同一个 localStroage 目录下，每一个再使用 UserInfoManage / UserConfigManage 等用于区分。 但是不能够 这样命名 lum ？
        l （local）u （user / userInfo）m （manage）！！？
        这样就比较迷惑了， 命名本来就是让其他人看起来更加简单易懂，而不是增加阅读负担
      </Paragraph>
      <Paragraph>
        注意点2：保证统一性 既然某个单词使用了缩写， 那么最好都用缩写，不能有的写，有的不写
      </Paragraph>
      <Paragraph>
        注意点3：缩写是作为一个单词存在，也就是这样的规则去命名的，例如： typeScript 缩写 ts这里第一个是小写，那么就是小写，后面的 Script 不再是单独的一个单词，应该是与前面是属于一个单词。转换规则 typeScript ={'>'} tscript ={'>'} ts , 同理如果 TypeScript ={'>'} Ts ， 这是只在命名的情况下的转换
      </Paragraph>
      <Paragraph>
        注意点4：不要通过删除单词中的字母来达到缩写的目的
        一些不好的命名
        <SimpleCode value={code6} height={80} />
      </Paragraph>
      <Title level={5} id="w-3-6">3.6、常量命名</Title>
      <Paragraph>
        关于常量的命名，一般不会改变的变量，这类变量比较固定（例如：一天有多少毫秒，180deg 或者 xxx deg的选择角度，再就是和其他人约定好的魔鬼数字等等）他们的共同点是我们无法使其变化，也可以说我们不希望他会被改变。
      </Paragraph>
      <Paragraph>
        这种常量的话一般是使用全大写，每一个单词使用 _ 下划线分开
        <SimpleCode value={code7} height={40} />
      </Paragraph>
      <Title level={5} id="w-3-7">3.7、单词拼接 加深语义化</Title>
      <Paragraph>
        <SimpleCode value={code8} height={100} />
        组件名称： 推荐使用大驼峰命名;
      </Paragraph>
      <Paragraph>
        属性名称： React DOM 使用小驼峰命令来定义属性的名称，而不使用 HTML 属性名称的命名约定；
      </Paragraph>
      <Paragraph>
        style 样式属性： 采用小驼峰命名属性的 JavaScript 对象；
        <SimpleCode value={code9} height={100} />
      </Paragraph>
      <Title level={4} id="w-4">4、JSX 写法注意</Title>
      <Title level={5} id="w-4-1">4.1、标签</Title>
      <Paragraph>
        （1）当标签没有子元素的时候，始终使用自闭合的标签 。
        <SimpleCode value={code10} height={100} />
      </Paragraph>
      <Paragraph>
        （2）如果标签有多行属性，关闭标签要另起一行 。
        <SimpleCode value={code10} height={150} />
      </Paragraph>
      <Paragraph>
        （3）在自闭标签之前留一个空格。
        <SimpleCode value={code11} height={150} />
      </Paragraph>
      <Paragraph>
        （4）当组件跨行时，要用括号包裹 JSX 标签。
        <SimpleCode value={code12} height={150} />
      </Paragraph>
      <Title level={5} id="w-4-2">4.2、对齐</Title>
      <Paragraph>
        JSX 语法使用下列的对齐方式 ：
        <SimpleCode value={code13} height={150} />
      </Paragraph>
      <Title level={5} id="w-4-2">4.3、引号</Title>
      <Paragraph>
        JSX 的属性都采用双引号，其他的 JS 都使用单引号 ，因为 JSX 属性 不能包含转义的引号, 所以当输入 "don't" 这类的缩写的时候用双引号会更方便。
        <SimpleCode value={code14} height={100} />
      </Paragraph>

      <Title level={4} id="w-5">5、样式写法</Title>
      <Paragraph>
        React 中样式可以使用 style 行内样式，也可以使用 className 属性来引用外部 CSS 样式表中定义的 CSS 类，我们推荐使用 className 来定义样式。并且推荐使用 less 来替换传统的 CSS 写法
      </Paragraph>
      <Title level={4} id="w-6">6、key 属性设置</Title>
      <Paragraph>
        key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key，但是如果列表项目的顺序可能会变化，不要使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题
        <SimpleCode value={code15} height={150} />
      </Paragraph>
      <Title level={4} id="w-7">7、状态提升</Title>
      <Paragraph>
        如果多个组件需要反映相同的变化数据，建议将共享状态提升到最近的共同父组件中去；从而依靠自上而下的数据流，而不是尝试在不同组件间同步 state。考虑将 state 作为应用程序需要记住改变数据的最小集合。组织 state 最重要的一条原则是保持它 DRY(不要自我重复)。计算出你应用程序需要的绝对精简 state 表示，按需计算其它一切。
      </Paragraph>
      <Title level={4} id="w-8">8、推荐使用 Context</Title>
      <Paragraph>
        如果某个属性在组件树的不同层级的组件之间需要用到，层级超过3层我们应该使用 Context 提供在组件之间共享此属性的方式，而不是显式地通过组件树的逐层传递 props
      </Paragraph>
      <Title level={4} id="w-9">9、路由加载</Title>
      <Paragraph>
        建议使用路由懒加载当前用户所需要的内容，这样能够显著地提高你的应用性能。尽管并没有减少应用整体的代码体积，但你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。
        <SimpleCode value={code16} height={100} />
      </Paragraph>
      <Title level={4} id="w-10">10、逻辑拆分</Title>
      <Paragraph>
        React hooks可以很方便地帮助开发者聚合逻辑抽离成自定义hooks，千万不要把一个页面所有的useState、useEffect等全都放在一个文件中，其实从功能上可以对页面进行拆分，拆分之后这些变量的定义也就可以拆出去了。其中有一个很简单的原则就是，如果一个逻辑同时涉及到了useState和useEffect，那么就可以一并抽离出去成为一个自定义hooks。例如接口请求大家一般都是直接在业务逻辑中做
        <SimpleCode value={code17} height={260} />
        根据上面的原则，和数据拉取相关的内容涉及到了useState和useEffect，这整块逻辑就可以拆出去，那么最终就只剩下：
        <SimpleCode value={code18} height={120} />
      </Paragraph>
      <Title level={4} id="w-11">11、组件拆分规则</Title>
      <Paragraph>
        <ul>
          <li>拆分的组件要保持功能单一。即组件内部代码的代码都只跟这个功能相关；</li>
          <li>组件要保持较低的耦合度，不要与组件外部产生过多的交互。如组件内部不要依赖过多的外部变量，父子组件的交互不要搞得太复杂等等。</li>
          <li>用组件名准确描述这个组件的功能。就像函数那样，可以让人不用关心组件细节，就大概知道这个组件是干嘛的。如果起名比较困难，考虑下是不是这个组件的功能并不单一。</li>
        </ul>
      </Paragraph>
      <Title level={4} id="w-12">12、模块划分规则</Title>
      <Paragraph>
        常量统一放到const.ts文件里，使用全大写，每一个单词使用 _ 下划线分开
        <SimpleCode value={code19} height={30} />
      </Paragraph>
      <Title level={4} id="w-13">13、CSSBEM规范</Title>
      <Paragraph id="w-13-1">
        1）、块（Block）
        <SimpleCode value={code20} height={50} />
      </Paragraph>
      <Paragraph id="w-13-2">
        2）、元素(Element)
        块中的子元素是块的子元素，并且子元素的子元素在 bem 里也被认为是块的直接子元素。一个块中元素的类名必须用父级块的名称作为前缀。
        如上面的例子，li.item 是列表的一个子元素
        <SimpleCode value={code21} height={150} />
      </Paragraph>
      <Paragraph id="w-13-3">
        3）、修饰符(modifier)
      </Paragraph>
      <Paragraph>
        一个“修饰符”可以理解为一个块的特定状态
        比如
        多种颜色的按钮
        <SimpleCode value={code22} height={150} />
      </Paragraph>
      <Paragraph id="w-13-4">
        4）、书写原则
      </Paragraph>
      <Paragraph>
        原则上不会出现2层以上选择器嵌套
        <SimpleCode value={code23} height={260} />
        <SimpleCode value={code24} height={210} />
      </Paragraph>
      <Paragraph id="w-13-5">
        5）、无意义的__
        <SimpleCode value={code25} height={150} />
      </Paragraph>
      <Paragraph id="w-13-6">
        6）、用新的块来保存新元素
        <SimpleCode value={code26} height={150} />
      </Paragraph>
      <Paragraph id="w-13-7">
        7）、命名空间
      </Paragraph>

      <Paragraph>
        .l-: 布局(layouts)
      </Paragraph>
      <Paragraph>
        .o-: 对象(objects)
      </Paragraph>
      <Paragraph>
        .c-: 组件(components)
      </Paragraph>
      <Paragraph>
        .js: js的钩子(JavaScript hooks)
      </Paragraph>
      <Paragraph>
        .is-|.has-: 状态类(state classes)
      </Paragraph>
      <Paragraph>
        .t1|.s1: 排版大小(typography sizes)
      </Paragraph>
      <Paragraph>
        .u-: 实用类(utility classes)
      </Paragraph>
    </div>)
}


