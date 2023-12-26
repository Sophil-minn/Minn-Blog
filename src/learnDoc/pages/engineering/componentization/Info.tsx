import { Card, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

export default function Info() {
  return (
    <div className='info-container'>
      <Title level={3}>前端组件化</Title>
      <Title level={4} id="c-1">1、什么是组件化？</Title>
      <Paragraph>
        前端组件化开发，就是将页面的某一部分独立出来，将这一部分的数据层（M）、视图层（V）和控制层（C）用黑盒的形式全部封装到一个组件内，暴露出一些开箱即用的函数和属性供外部调用。无论这个组件放到哪里去使用，它都具有一样的功能和样式，从而实现复用（只写一处，处处复用），这种整体化的思想就是组件化。
      </Paragraph>
      <Paragraph>
        <Text strong type='warning'>每个组件都是独立的个体，都只负责一块功能。组件之间互相独立，通过特定的方式进行沟通。外部完全不用考虑组件的内部实现逻辑。一个好的前端组件，必须要把维护性，复用性，扩展性，性能做到极致。</Text>
      </Paragraph>
      <Title level={4} id="c-2">2、组件化与模块化的区别</Title>
      <Title level={5}>从历史发展角度来讲</Title>
      <Paragraph>随着前端开发越来越复杂、对效率要求越来越高，由项目级模块化开发，进一步提升到通用功能组件化开发，模块化是组件化的前提，组件化是模块化的演进</Paragraph>
      <Title level={5}>从整体概念来讲</Title>
      <Paragraph>
        <ul>
          <li> 模块化是一种分治的思想，述求是解耦，一般指的是 JavaScript 模块，比如用来格式化时间的模块</li>
          <li>组件化是模块化思想的实现手段，述求是复用，包含了 template，style，script，script又可以由各种模块组成</li>
        </ul>
      </Paragraph>
      <Title level={5}>从复用的角度来讲</Title>
      <Paragraph>
        <ul>
          <li> 模块一般是项目范围内按照项目业务内容来划分的，比如一个项目划分为子系统、模块、子模块，代码分开就是模块，位于架构业务框架层，横向分块</li>
          <li>组件是按照一些小功能的通用性和可复用性抽象出来的，可以跨项目的，是可复用的模块，通常位于架构底层，被其他层所依赖</li>
        </ul>
      </Paragraph>
      <Title level={5}>从划分的角度来讲</Title>
      <Paragraph>
        <ul>
          <li> 模块是从代码逻辑的角度进行划分，方便代码分层开发，保证每个功能模块的职能单一</li>
          <li>组件时从 UI 界面的角度进行划分，前端的组件化，方便 UI 组件的重用</li>
        </ul>
      </Paragraph>
      <Paragraph>
        随着前端项目复杂度的急剧增加，我们很容易遇到以下这些场景：
        <ol>
          <li>页面逻辑越来越多，代码越写越庞大，容易牵一发而动全身</li>
          <li>同样的逻辑在多个地方重复编写，改一个问题要在多个地方进行同样的修改</li>
        </ol>
      </Paragraph>
      <Paragraph>
        以上场景带来的问题就是：
      </Paragraph>
      <Paragraph>
        <ol>
          <li>项目复杂度增加</li>
          <li>重复性劳动多，效率低</li>
          <li>代码质量差，不可控</li>
        </ol>
      </Paragraph>
      <Paragraph>
        因此前端组件化可以给我们带来：
      </Paragraph>
      <Paragraph>
        <ol>
          <li>增加代码的复用性，灵活性</li>
          <li>提高开发效率，降低开发成本</li>
          <li>便于各个开发者之间分工协作、同步开发</li>
          <li>降低系统各个功能的耦合性，提高了功能内部的聚合性</li>
          <li>降低代码的维护成本</li>
        </ol>
      </Paragraph>
      <Paragraph>
        应用组件化需要考虑的问题
      </Paragraph>
      <Paragraph>
        **如何分成各个模块？**我们可以根据业务来进行划分，对于比较大的功能模块可以作为应用的一个模块来使用，但是也应该注意，划分出来的模块不要过多，否则可能会降低编译的速度并且增加维护的难度。
      </Paragraph>
      <Paragraph>
        如何解决组件之间的隔离？
      </Paragraph>
      <Paragraph>
        各个模块之间如何进行数据共享和数据通信？
      </Paragraph>
      <Paragraph>
        **如何防止资源名冲突问题？**遵守命名规约就能规避资源名冲突问题
      </Paragraph>
      <Title level={4} id="c-3">3、组件的划分</Title>
      <Title level={5} id="c-3-1">3.1、划分方法</Title>
      <Paragraph>
        尽可能抽象和解耦。不断抽象出一个跟业务没有关系的模块，它是可以继承的，这就是组件化设计的思维转换。
      </Paragraph>
      <Paragraph>
        划分粒度：需要根据实际情况权衡，太小会提升维护成本，太大又不够灵活。
      </Paragraph>
      <Paragraph>
        目前还没有一套原则和方法论来指导组件的划分，我们只能根据前人的经验再结合实际情况来进行组件的划分。
        关于组件划分的一些建议：
      </Paragraph>
      <Paragraph>
        组件之间的依赖应该尽可能的少。
        单个组件代码量最好不要超过1000行。
      </Paragraph>
      <Paragraph>
        组件划分的依据通常是业务逻辑、功能，要考虑各组件之间的关系是否明确，以及组件的可复用度。
      </Paragraph>
      <Paragraph>
        <Text strong type='warning'>
          每一个组件都应该有其独特的划分目的，有的是为了复用实现，有的是为了封装复杂度、清晰业务实现。
        </Text>
      </Paragraph>
      <Title level={5} id="c-3-2">3.2、组件分类</Title>
      <Paragraph>
        <Text strong>
          (1)、基础UI组件
        </Text>
      </Paragraph>
      <Paragraph>
        这是最小化的组件，它们不依赖于其他组件。作为页面中最少的元素而存在，比如按钮、下拉菜单、对话框等。其中大部分是对原生 Web 元素的封装，例如：input 、 select 、 button ，它们以简单的形式存在。
      </Paragraph>
      <Paragraph>
        在创建基础组件的过程中，要遵循一个基本原则：基础组件是独立存在的。它们可以共享配置，但是不能相互依赖，依赖意味着它不是基础组件。
      </Paragraph>
      <Paragraph>
        像 antd、iview、element-ui 里提供的基本都是基础 UI 组件。
      </Paragraph>
      <Paragraph>
        <Text strong>
          (2)、复合组件
        </Text>
      </Paragraph>
      <Paragraph>
        复合组件是在多个基础的 UI 组件上的进一步结合。大部分复合组件，包含了一些复杂的组件，往往需要花很长的时间，才能变成一个可稳定使用的版本。复合组件包含以下几个部分：
      </Paragraph>
      <Paragraph>
        表格。表格往往带有复杂的交互，比如固定行、固定列、可编辑、虚拟滚动等。由于其数据量大，往往又对性能有很高的要求。
      </Paragraph>
      <Paragraph>
        图表。图表的门槛相对比较高，并且种类繁多，对于显示、交互的要求也高。
      </Paragraph>
      <Paragraph>
        富文本编辑器。几乎是最复杂的组件，其功能需求往往与 Word 进行对比，其代码量可能接近 Word 的数量级。
      </Paragraph>
      <Paragraph>
        <Text strong>
          (3)、业务组件
        </Text>
      </Paragraph>
      <Paragraph>
        叶务组件是我们在实现业务功能的过程中抽象出来的组件，其作用是在应用中复用业务逻辑。当它们涉及一些更复杂的业务情形时，就要考虑是否将这些组件放入组件库中。
      </Paragraph>
      <Paragraph>
        通常是根据最小业务状态抽象而出，有些业务组件也具有一定的复用性，但大多数是一次性组件。
      </Paragraph>
      <Paragraph>
        特点：UI可配置，业务逻辑完整。有完整的后台流程，数据结构。
      </Paragraph>
      <Title level={5} id="c-3-3">3.3、组件的隔离</Title>
      <Paragraph>
        由于前端基础技术栈自身的原因，html 、css 、js 运行在一个页面上时是没有隔离的，也就是说 js 可以根据选择器获取到任意的 dom 节点，一条 css 规则也会应用在文档中所有满足规则的节点， js 代码中可以随意的创建和使用全局变量。
      </Paragraph>
      <Paragraph>
        因此，要想实现组件化，我们应该尽可能的去实现每个组件的隔离。
      </Paragraph>
      <Paragraph>
        组件隔离其实就是模块化，这里我们需要实现 CSS 模块化和 JS 模块化
      </Paragraph>
      <Title level={5} id="c-3-4">3.4、组件间通信</Title>
      <Paragraph>
        高内聚低耦合必然会带来数据流动上的壁垒，所以隔离后的组件就要解决组件之间的通信处理。组件通信分为父子组件通信和非父子组件通信，这就涉及到接口设计、事件处理和状态管理三块内容
      </Paragraph>
      <Paragraph>
        在 vue 中，可以使用 props ，事件监听 ，EventBus 的方式来实现组件间的通信。
      </Paragraph>
      <Title level={5} id="c-3-5">3.5、组件的按需加载</Title>
      <Paragraph>
        iview 、antd 使用的都是 babel-plugin-import 插件，可以实现组件的按需加载。
      </Paragraph>
      <Paragraph>
        本质上就是将对整个库的引用，变为具体模块的引用。这样 webpack 收集依赖模块时就不是整个组件库，而是具体的某个模块了。
      </Paragraph>
      <Paragraph>
        如果所用 ui 组件库不符合 babel-plugin-import 的转换规则，可以通过 babel-plugin-import 提供的 customName 字段来自定义转换后的路径。通过 style 字段，来进一步自定义转换后的 style 路径
      </Paragraph>
      <Title level={4} id="c-4">4、组件的设计原则</Title>
      <Paragraph>
        <ol>
          <li>标准性：任何一个组件都应该遵守一套标准，可以使得不同区域的开发人员据此标准开发出一套标准统一的组件。</li>
          <li>单一职责原则：一个组件只专注做一件事，且把这件事做好。一个功能如果可以拆分成多个功能点，那就可以将每个功能点封装成一个组件，当然也不是组件的颗粒度越小越好，只要将一个组件内的功能逻辑控制在一个可控的范围内即可。</li>
          <li>开闭原则：对扩展开放，对修改关闭。属性配置等 API 对外开放，组件内部状态对外封闭。</li>
          <li>追求短小精悍</li>
          <li>避免太多参数**，扁平化参数**：除了数据，避免复杂的对象，尽量只接收原始类型的值。</li>
          <li>父组件不依赖子组件，删除某个子组件不会造成功能异常</li>
          <li>适用SPOT（Single Point of Truth）法则：尽量不要重复代码</li>
          <li>追求无副作用</li>
          <li>复用与易用</li>
          <li>避免暴露组件内部实现</li>
          <li>入口处检查参数的有效性，出口处检查返回的正确性</li>
          <li>稳定抽象原则（SAP）: 组件的抽象程度与其稳定程度成正比,一个稳定的组件应该是抽象的（逻辑无关的）,一个不稳定的组件应该是具体的（逻辑相关的）,为降低组件之间的耦合度，我们要针对抽象组件编程，而不是针对业务实现编程</li>
          <li>良好的接口设计，API 尽量和已知概念保持一致</li>
        </ol>
      </Paragraph>
      <Title level={4} id="c-5">5、可配置性</Title>

      <Paragraph>
        一个组件，要明确它的输入和输出分别是什么。
      </Paragraph>
      <Paragraph>
        组件除了要展示默认的内容，还需要做一些动态的适配。
      </Paragraph>
      <Paragraph>
        要做可配置性，最基本的方式是通过属性向组件传递配置的值，而在组件初始化的声明周期内，通过读取属性的值做出对应的显示修改。还有一些方法，通过调用组件暴露出来的函数，向函数传递有效的值；修改全局 CSS 样式；向组件传递特定事件，并在组件内监听该事件来执行函数等。
      </Paragraph>
      <Paragraph>
        在做可配置性时，为了让组件更加健壮，保证组件接收到的是有效的属性、函数接收到的是有效的参数，需要做一些校验。
      </Paragraph>
      <Paragraph>
        <Text strong>属性的值的校验</Text>
      </Paragraph>
      <Paragraph>
        <ol>
          <li>属性值的类型是否是有效的</li>
          <li>属性是否是必填的</li>
        </ol>
      </Paragraph>
      <Paragraph>
        <Text strong>函数的参数的校验</Text>
      </Paragraph>
      <Paragraph>
        函数的参数校验，校验函数的入参和出参。
      </Paragraph>
      <Title level={4} id="c-6">6、组件的生命周期</Title>
      <Paragraph>
        一个组件，需要明确知道在生命周期的不同阶段做该做的事。
      </Paragraph>
      <Paragraph>
        初始化阶段，读取属性的值，如果需要做数据和逻辑处理的话，在这个阶段进行。
      </Paragraph>
      <Paragraph>
        属性值变化时，如果属性发生变化，且需要对变化后的数据进行处理的话，在这个阶段进行处理。
      </Paragraph>
      <Paragraph>
        组件销毁阶段，如果组件已经创建了一些可能会对系统产生一些副作用的东西，可以在这个阶段进行清除。
      </Paragraph>
      <Paragraph>
        一个组件的完整生命周期包括：
        <ul>
          <li>init, 初始化组件根节点和配置</li>
          <li>fetch，加载css和js资源</li>
          <li>render，内容渲染，默认的渲染内容方式是BigRender</li>
          <li>ready,进行数据绑定等操作</li>
          <li>update,数据更新</li>
          <li>destroy,解除所有事件监听，删除所有组件节点</li>
        </ul>
      </Paragraph>
      <Title level={4} id="c-7">7、事件传递</Title>
      <Paragraph>
        组件接收用户的输入后，需要反馈给外部。
      </Paragraph>
      <Paragraph>
        例如一个输入框组件，用户输入数字后，组件需要告诉外部自己接收到了用户的输入，以及输入内容。
        输出一般有两种方式：
      </Paragraph>
      <Paragraph>
        <ol>
          <li>执行回调方法：直接执行 attribute 、 property 传入的 onXXX 方法，并且把数据通过函数传参的方式。大部分开源类库都使用这种方式。</li>
          <li>事件触发器：使用 EventEmitter ，来触发约定好的事件名。调用方则需要对该事件名进行监听，数据传到对事件监听的回调方法里。</li>
        </ol>
      </Paragraph>

    </div>)
}