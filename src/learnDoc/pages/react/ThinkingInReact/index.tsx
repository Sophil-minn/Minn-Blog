import { Divider, Typography } from "antd";
import Container from "../../../block/container";

const { Title, Text, Paragraph } = Typography;

export default function ThinkingInReact() {
  return (
    <Container>
      <Title level={4}>React 哲学</Title>
      <Paragraph>
        React 可以改变你对可见设计和应用构建的思考。当你使用 React 构建用户界面时，你首先会把它分解成一个个<Text strong> 组件</Text>，然后，你需要把这些组件连接在一起，使数据流经它们。
      </Paragraph>
      <Divider />
      <Text>使用 React 实现 UI</Text>
      <Title level={5}>步骤一: 将 UI 拆解为组件层级结构</Title>
      <Paragraph>
        取决于你的使用背景，可以考虑通过不同的方式将设计分割为组件:
        <ul>
          <li>程序设计—使用同样的技术决定你是否应该创建一个新的函数或者对象。这一技术即 单一功能原理，也就是说，一个组件理想得仅做一件事情。但随着功能的持续增长，它应该被分解为更小的子组件。</li>
          <li>CSS—思考你将把类选择器用于何处。(然而，组件并没有那么细的粒度。)</li>
          <li>设计—思考你将如何组织布局的层级。</li>
        </ul>
        如果你的 JSON 结构非常棒，经常会发现其映射到 UI 中的组件结构是一件自然而然的事情。那是因为 UI 和原型常拥有相同的信息结构—即，相同的形状。将你的 UI 分割到组件，每个组件匹配到原型中的每个部分。
      </Paragraph>
      <Title level={5}>步骤二: 使用 React 构建一个静态版本</Title>
      <Paragraph>
        根据你的数据模型，构建一个不带任何交互的 UI 渲染代码版本…经常是先构建一个静态版本比较简单，然后再一个个添加交互。构建一个静态版本需要写大量的代码，并不需要什么思考; 但添加交互需要大量的思考，却不需要大量的代码。
      </Paragraph>
      <Paragraph>
        构建应用程序的静态版本来渲染你的数据模型，将构建 组件 并复用其它的组件，然后使用 props 进行传递数据。Props 是从父组件向子组件传递数据的一种方式。
      </Paragraph>
      <Paragraph>
        你既可以通过从层次结构更高层组件 (如 FilterableProductTable) 开始 “自上而下” 构建，也可以通过从更低层级组件 (如 ProductRow) “自下而上” 进行构建。在简单的例子中，自上而下构建通常更简单；而在大型项目中，自下而上构建更简单。
      </Paragraph>
      <Paragraph>
        在构建你的组件之后，即拥有一个渲染数据模型的可复用组件库。因为这是一个静态应用程序，组件仅返回 JSX。最顶层组件 (FilterableProductTable) 将接收你的数据模型作为其 prop。这被称之为 单向数据流，因为数据从树的顶层组件传递到下面的组件
      </Paragraph>

      <Title level={5}>步骤三: 发现 UI 精简且完整的 state 表示 </Title>
      <Paragraph>
        考虑将 state 作为应用程序需要记住改变数据的最小集合。组织 state 最重要的一条原则是保持它 DRY(不要自我重复)。计算出你应用程序需要的绝对精简 state 表示，按需计算其它一切
        <ul>
          <li>随着时间推移 保持不变？ 如此，便不是 state</li>
          <li>通过 props 从父组件传递？ 如此，便不是 state</li>
          <li>是否可以基于已存在于组件中的 state 或者 props 进行计算？ 如此，它肯定不是state!</li>
        </ul>
      </Paragraph>
      <Title level={5}>步骤四: 验证 state 应该被放置在哪里</Title>
      <Paragraph>
        在验证你应用程序中的最小 state 数据之后，你需要验证哪个组件是通过改变 state 实现可响应的，或者 拥有 这个 state。记住：React 使用单向数据流，通过组件层级结构从父组件传递数据至子组件。要搞清楚哪个组件拥有哪个 state。
        为你应用程序中的每一个 state:
        <ol>
          <li>验证每一个基于特定 state 渲染的组件</li>
          <li>寻找它们最近并且共同的父组件——在层级结构中，一个凌驾于它们所有组件之上的组件。</li>
          <li>
            决定 state 应该被放置于哪里
            <ol>
              <li>通常情况下，你可以直接放置 state 于它们共同的父组件</li>
              <li>你也可以将 state 放置于它们父组件上层的组件。</li>
              <li>如果你找不到一个有意义拥有这个 state 的地方，单独创建一个新的组件去管理这个 state，并将它添加到它们父组件上层的某个地方</li>
            </ol>
          </li>
        </ol>
        用 useState() Hook 为组件添加 state 。 Hook 可以 “钩住” 组件的 渲染周期。
      </Paragraph>
      <Title level={5}>步骤五: 添加反向数据流</Title>
      <Paragraph>
        React 使数据流显式展示，是与双向数据绑定相比，需要更多的输入
      </Paragraph>
    </Container>
  );
}

