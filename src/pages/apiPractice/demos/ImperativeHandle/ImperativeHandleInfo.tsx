import { FC } from 'react';
import { Typography } from 'antd';
import { lazy } from 'react'
import { code1, code2, code3, code4, code5, code6 } from './code';
import Example from './Example';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

const ImperativeHandleInfo: FC = () => {
  return (
    <>
      <Title level={3} id="useImperativeHandle">useImperativeHandle</Title>
      <Paragraph>useImperativeHandle 是 React 中的一个 Hook，它能让你自定义由 ref 暴露出来的句柄。</Paragraph>
      <SimpleCode value="useImperativeHandle(ref, createHandle, dependencies?)" />
      <Paragraph>
        在组件顶层通过调用 useImperativeHandle 来自定义 ref 暴露出来的句柄：
      </Paragraph>
      <SimpleCode value={code1} height={160} />
      <Title level={4} id="useImperativeHandleId">参考</Title>
      <Paragraph>
        <ul>
          <li>ref：该 ref 是你从 forwardRef 渲染函数 中获得的第二个参数。</li>
          <li>createHandle：该函数无需参数，它返回你想要暴露的 ref 的句柄。该句柄可以包含任何类型。通常，你会返回一个包含你想暴露的方法的对象。</li>
          <li>可选的 dependencies：函数 createHandle 代码中所用到的所有反应式的值的列表。反应式的值包含 props、状态和其他所有直接在你组件体内声明的变量和函数。倘若你的代码检查器已 为 React 配置好，它会验证每一个反应式的值是否被正确指定为依赖项。该列表的长度必须是一个常数项，并且必须按照 [dep1, dep2, dep3] 的形式罗列各依赖项。React 会使用 Object.is 来比较每一个依赖项与其对应的之前值。如果一次重新渲染导致某些依赖项发生了改变，或你没有提供这个参数列表，你的函数 createHandle 将会被重新执行，而新生成的句柄则会被分配给 ref。</li>
        </ul>
      </Paragraph>
      <Title level={4}>返回值</Title>
      <Paragraph>useImperativeHandle 返回 undefined。</Paragraph>
      <Title level={3} id="useImperativeHandleId">用法</Title>
      <Title level={4} id="Exposing-a-custom-ref-handle-to-the-parent-component">向父组件暴露一个自定义的 ref 句柄 </Title>
      <Paragraph>
        默认情况下，组件不会将它们的 DOM 节点暴露给父组件。举例来说，如果你想要 MyInput 的父组件 能访问到 {'<'}input{'>'} DOM 节点，你必须选择使用 forwardRef:。
        <SimpleCode value={code2} height={90} />
        在上方的代码中，MyInput 的 ref 会接收到 input DOM 节点。然而，你可以选择暴露一个自定义的值。为了修改被暴露的句柄，在你的顶层组件调用 useImperativeHandle：
      </Paragraph>
      <Title level={3} id="useImperativeHandleId">用法</Title>
      <Paragraph>
        <SimpleCode value={code3} height={160} />
        <Text type="danger"> 注意在上述代码中，该 ref 已不再被转发到 input 中。</Text>
      </Paragraph>
      <Paragraph>
        举例来说，假设你不想暴露出整个 input DOM 节点，但你想要它其中两个方法：focus 和 scrollIntoView。为此，用单独额外的 ref 来指向真实的浏览器 DOM。然后使用 useImperativeHandle 来暴露一个句柄，它只返回你想要父组件去调用的方法：
        <SimpleCode value={code4} height={200} />
        现在，如果你的父组件获得了 MyInput 的 ref，就能通过该 ref 来调用 focus 和 scrollIntoView 方法。然而，它的访问是受限的，无法读取或调用下方 input DOM 节点的其他所有属性和方法。
        <SimpleCode value={code5} height={400} title="App.j" />
        <SimpleCode value={code6} height={300} title="MyInput.js" />
      </Paragraph>
      <Title level={4} id="Exposing-your-own-imperative-methods">暴露你自己的命令式方法 </Title>
      <Paragraph>你通过命令式句柄暴露出来的方法不一定需要完全匹配 DOM 节点的方法。例如，这个 Post 组件暴露了一个 scrollAndFocusAddComment 方法。它可以让你在点击按钮后，使父组件 Page 滚动到评论列表的底部 并 聚焦到输入框 </Paragraph>
      <Example />
      <Title level={4} ><Text type="danger">陷阱</Text> </Title>
      <Paragraph>
        <ul>
          <li>不要滥用 ref。 你应当仅在你没法通过 prop 来表达 命令式 行为的时候才使用 ref：例如，滚动到指定节点、聚焦某个节点、触发一次动画，以及选择文本等等。</li>
          <li>如果可以通过 prop 实现，那就不应该使用 ref。例如，你不应该从一个 Model 组件暴露出 open, close 这样的命令式句柄，最好是像 Modal isOpen=isOpen  这样，将 isOpen 作为一个 prop。副作用 可以帮你通过 prop 来暴露一些命令式的行为。</li>
        </ul>
      </Paragraph>
    </>
  );
};

export default ImperativeHandleInfo;