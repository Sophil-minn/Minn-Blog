import { Card, Divider, Typography } from 'antd';
import { lazy } from 'react'
import { code1, code10, code11, code12, code13, code14, code2, code3, code4, code5, code6, code7, code8, code9 } from './code';
import ClickCounter from './Example/ClickCounter';
import Stopwatch from './Example/Stopwatch';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function RefInfo() {
  return (
    <>
      <Title level={3} id="useRef">useRef</Title>
      <Paragraph>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</Paragraph>
      <SimpleCode value="const ref = useRef(initialValue)" height={30} />
      <Title level={3}>Reference </Title>
      <Paragraph>Call useRef at the top level of your component to declare a ref.</Paragraph>
      <SimpleCode value={code1} height={120} />
      <Title level={3} id="useReducerInfoId">用法</Title>
      <Title level={4} id="Referencing-a-value-with-a-ref">Referencing a value with a ref </Title>
      <Paragraph>Call useRef at the top level of your component to declare one or more refs.</Paragraph>
      <SimpleCode value={code2} height={120} />
      <Paragraph>
        useRef returns a ref object with a single current property initially set to the initial value you provided.
      </Paragraph>
      <Paragraph>
        On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.
      </Paragraph>
      <Paragraph>
        Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property:
        <SimpleCode value={code3} height={150} />
        Later, you can read that interval ID from the ref so that you can call clear that interval:
        <SimpleCode value={code4} height={120} />
      </Paragraph>
      <Paragraph>
        By using a ref, you ensure that:
        <ul>
          <li>You can store information between re-renders (unlike regular variables, which reset on every render).</li>
          <li>Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).</li>
          <li>The information is local to each copy of your component (unlike the variables outside, which are shared).</li>
        </ul>
        Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead.
        改变 ref 不会触发重新渲染，所以 ref 不适合用于存储期望显示在屏幕上的信息。如有需要，使用 state 代替
      </Paragraph>
      <Card title="Examples of referencing a value with useRef">
        <Title level={5}>ClickCounter</Title>
        <ClickCounter />
        <Divider />
        <Title level={5}>Stopwatch</Title>
        <Stopwatch />
      </Card>
      <Paragraph>
        <Title><Text type='danger'>陷阱</Text></Title>
        <Text type='warning'>不要在渲染期间写入 或者读取 ref.current。</Text>
      </Paragraph>
      <Paragraph>
        React 期望你的组件的主体 表现得像一个纯函数：
        <ul>
          <li>如果输入的（props、state 和 context）都是一样的，那么就应该返回一样的 JSX。</li>
          <li>以不同的顺序或用不同的参数调用它，不应该影响其他调用的结果</li>
        </ul>
        在 渲染期间 读取或写入 ref 会破坏这些预期行为。
        <SimpleCode value={code5} height={160} />
        你可以在 事件处理程序或者 effects 中读取和写入 ref。
        <SimpleCode value={code6} height={260} />
        如果 不得不 在渲染期间读取 或者写入，使用 state 代替。
        当你打破这些规则时，你的组件可能仍然可以工作，但是我们为 React 添加的大多数新功能将依赖于这些预期行为。
      </Paragraph>
      <Title level={4} id="Manipulating-the-DOM-with-a-ref">通过 ref 操作 DOM </Title>
      <Paragraph>
        使用 ref 操作 DOM 是非常常见的。React 内置了对它的支持。
      </Paragraph>
      <Paragraph>
        首先，声明一个 initial value 为 null 的 ref 对象
        <SimpleCode value={code7} height={160} />
        然后将你的 ref 对象作为 ref 属性传递给你想要操作的 DOM 节点的 JSX：
        <SimpleCode value="return <input ref={inputRef} />;" height={40} />
        当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为你的 ref 对象的 current 属性。现在你可以访问 input 的 DOM 节点，并且可以调用类似于 focus() 的方法：
        <SimpleCode value={code8} height={80} />
        当节点从屏幕上移除时，React 将把 current 属性设回 null。
      </Paragraph>
      <Title level={4}>Examples of manipulating the DOM with useRef</Title>
      <Paragraph>
        <ul>
          <li>1. <a href='https://codesandbox.io/s/lmop3g?file=/App.js&utm_medium=sandpack'>聚焦文字输入框</a> </li>
          <li>2.<a href='https://codesandbox.io/s/32xjhx?file=/App.js&utm_medium=sandpack'> 滚动图片到视图</a></li>
          <li>3.<a href='https://codesandbox.io/s/m73n0u?file=/App.js&utm_medium=sandpack'>播放和暂停视频</a> </li>
          <li>4. <a href='https://codesandbox.io/s/u5odpc?file=%2FApp.js&utm_medium=sandpack'>向你的组件暴露 ref</a></li>
        </ul>
      </Paragraph>
      <Title level={4} id="Avoiding-recreating-the-ref-contents">避免重复创建 ref 的内容  </Title>
      <Paragraph>
        React 保存首次的 ref 初始值，并在后续的渲染中忽略它。
        <SimpleCode value={code9} height={100} />
        虽然 new VideoPlayer() 的结果只会在首次渲染时使用，但是你依然在每次渲染时都在调用这个方法。如果是创建昂贵的对象，这可能是一种浪费。
      </Paragraph>
      <Paragraph>
        为了解决这个问题，你可以像这样初始化 ref：
        <SimpleCode value={code10} height={120} />
        通常情况下，在渲染过程中写入或读取 ref.current 是不允许的。然而，在这种情况下是可以的，因为结果总是一样的，而且条件只在初始化时执行，所以是完全可以预测的。
      </Paragraph>
      <Title level={4}>如何避免在初始化 useRef 之后进行 null 的类型检查</Title>
      <Paragraph>
        如果你使用一个类型检查器，并且不想总是检查 null，你可以尝试用这样的模式来代替：
        <SimpleCode value={code11} height={200} />
        在这里，playerRef 本身是可以为空的。然而，你应该能够使你的类型检查器确信，不存在 getPlayer() 返回 null 的情况。然后在你的事件处理程序中使用 getPlayer()
      </Paragraph>
      <Title level={3} id="useRef-troubleshooting">疑难解答 </Title>
      <Title level={4} id="I-can’t-get-a-ref-to-a-custom-component">我无法获取自定义组件的 ref  </Title>
      如果你尝试像这样传递 ref 到你自己的组件：
      <SimpleCode value={code12} height={90} />
      <Paragraph>
        你可能会在控制台中得到这样的错误：
        Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
      </Paragraph>
      <Paragraph>默认情况下，你自己的组件不会暴露它们内部 DOM 节点的 ref。
        为了解决这个问题，首先，找到你想获得 ref 的组件：
        <SimpleCode value={code13} height={120} />
        然后像这样将其包装在 forwardRef 里：
        <SimpleCode value={code14} height={200} />
      </Paragraph>
      <Paragraph>最后，父级组件就可以得到它的 ref。</Paragraph>
    </>
  )
}


